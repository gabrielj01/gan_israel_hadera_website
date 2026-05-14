import { useEffect, useMemo, useState } from 'react'
import rulesPdfUrl from '../assets/docs/reglement_interieur.pdf'

const RULES_PDF_URL = rulesPdfUrl
const REGISTRATION_DEADLINE_MONTH_INDEX = 5
const REGISTRATION_DEADLINE_DAY = 10

const WEEKS = [
  {
    id: 'week1',
    title: 'Semaine 1',
    dates: 'Du 5 au 9 juillet',
  },
  {
    id: 'week2',
    title: 'Semaine 2',
    dates: 'Du 12 au 16 juillet',
  },
  {
    id: 'week3',
    title: 'Semaine 3',
    dates: 'Du 19 au 26 juillet',
  },
]

const CHILDREN_OPTIONS = [
  { value: 1, label: '1 enfant' },
  { value: 2, label: '2 enfants' },
  { value: 3, label: '3 enfants' },
  { value: 4, label: '4 enfants' },
  { value: 5, label: '5 enfants' },
]

const PRICING_PLANS = [
  {
    id: 'early',
    title: 'Tarif préférentiel',
    date: 'Avant le 10 juin',
    badge: '🎉 Pré-inscription',
    note: 'Tarifs préférentiels pour toute inscription avant le 10 juin.',
    rates: {
      1: {
        oneWeekExceptWeek3: 500,
        oneWeekWithWeek3: 600,
        twoWeeksExceptWeek3: 1000,
        twoWeeksWithWeek3: 1100,
        threeWeeks: 1400,
      },
      2: {
        oneWeekExceptWeek3: 1000,
        oneWeekWithWeek3: 1200,
        twoWeeksExceptWeek3: 2000,
        twoWeeksWithWeek3: 2200,
        threeWeeks: 2800,
      },
      3: {
        oneWeekExceptWeek3: 1500,
        oneWeekWithWeek3: 1800,
        twoWeeksExceptWeek3: 3000,
        twoWeeksWithWeek3: 3300,
        threeWeeks: 4050,
      },
      4: {
        oneWeekExceptWeek3: 2000,
        oneWeekWithWeek3: 2400,
        twoWeeksExceptWeek3: 4000,
        twoWeeksWithWeek3: 4400,
        threeWeeks: 5400,
      },
      5: {
        oneWeekExceptWeek3: 2500,
        oneWeekWithWeek3: 3000,
        twoWeeksExceptWeek3: 5000,
        twoWeeksWithWeek3: 5500,
        threeWeeks: 6600,
      },
    },
  },
  {
    id: 'standard',
    title: 'Tarif normal',
    date: 'Après le 10 juin',
    badge: '📅 Inscription standard',
    note: 'Tarifs appliqués pour toute inscription après le 10 juin.',
    rates: {
      1: {
        oneWeekExceptWeek3: 550,
        oneWeekWithWeek3: 650,
        twoWeeksExceptWeek3: 1100,
        twoWeeksWithWeek3: 1200,
        threeWeeks: 1550,
      },
      2: {
        oneWeekExceptWeek3: 1100,
        oneWeekWithWeek3: 1300,
        twoWeeksExceptWeek3: 2200,
        twoWeeksWithWeek3: 2400,
        threeWeeks: 2950,
      },
      3: {
        oneWeekExceptWeek3: 1650,
        oneWeekWithWeek3: 1950,
        twoWeeksExceptWeek3: 3300,
        twoWeeksWithWeek3: 3600,
        threeWeeks: 4350,
      },
      4: {
        oneWeekExceptWeek3: 2400,
        oneWeekWithWeek3: 2800,
        twoWeeksExceptWeek3: 4800,
        twoWeeksWithWeek3: 5200,
        threeWeeks: 6000,
      },
      5: {
        oneWeekExceptWeek3: 2750,
        oneWeekWithWeek3: 3250,
        twoWeeksExceptWeek3: 5500,
        twoWeeksWithWeek3: 6000,
        threeWeeks: 7350,
      },
    },
  },
]

function formatPrice(price) {
  return `${price.toLocaleString('fr-FR')} ₪`
}

function getEarlySaving(childrenCount, selectedWeeksCount) {
  return 50 * childrenCount * selectedWeeksCount
}

function getRegistrationDeadline(year) {
  return new Date(
    year,
    REGISTRATION_DEADLINE_MONTH_INDEX,
    REGISTRATION_DEADLINE_DAY,
    23,
    59,
    59
  )
}

function getCountdown(deadline, now) {
  const difference = Math.max(deadline.getTime() - now.getTime(), 0)

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return { days, hours, minutes, seconds, isFinished: difference === 0 }
}

function getActivePlan(isEarlyRateActive) {
  return PRICING_PLANS.find((plan) =>
    isEarlyRateActive ? plan.id === 'early' : plan.id === 'standard'
  )
}

function getSingleWeekPrice(plan, childrenCount, weekId) {
  const rates = plan.rates[childrenCount]

  return weekId === 'week3'
    ? rates.oneWeekWithWeek3
    : rates.oneWeekExceptWeek3
}

function getTotalPriceDetails(plan, childrenCount, selectedWeeks) {
  const selectedCount = selectedWeeks.length
  const includesWeek3 = selectedWeeks.includes('week3')
  const rates = plan.rates[childrenCount]

  if (selectedCount === 0) return null

  let finalPrice = 0

  if (selectedCount === 1) {
    finalPrice = includesWeek3
      ? rates.oneWeekWithWeek3
      : rates.oneWeekExceptWeek3
  }

  if (selectedCount === 2) {
    finalPrice = includesWeek3
      ? rates.twoWeeksWithWeek3
      : rates.twoWeeksExceptWeek3
  }

  if (selectedCount === 3) {
    finalPrice = rates.threeWeeks
  }

  const grossPrice = selectedWeeks.reduce((total, weekId) => {
    const singleWeekPrice = getSingleWeekPrice(plan, childrenCount, weekId)

    if (plan.id === 'early') {
      return total + singleWeekPrice + getEarlySaving(childrenCount, 1)
    }

    return total + singleWeekPrice
  }, 0)

  return {
    finalPrice,
    grossPrice,
    hasDiscount: plan.id === 'early' && grossPrice > finalPrice,
  }
}

function CountdownBox({ countdown, isEarlyRateActive }) {
  if (!isEarlyRateActive) {
    return (
      <div className="pricing-countdown pricing-countdown-ended fade-in fade-in-delay-1">
        <span className="pricing-countdown-label">
          Tarif préférentiel terminé
        </span>
        <strong>Le tarif normal est maintenant appliqué.</strong>
      </div>
    )
  }

  return (
    <div className="pricing-countdown fade-in fade-in-delay-1">
      <span className="pricing-countdown-label">
        Le tarif préférentiel se termine le 10 juin ! <br /> Profitez-en avant qu’il ne soit trop tard !
      </span>

      <div className="countdown-grid" aria-label="Compte à rebours jusqu’au 10 juin">
        <div className="countdown-item">
          <strong>{countdown.days}</strong>
          <span>jours</span>
        </div>

        <div className="countdown-item">
          <strong>{countdown.hours}</strong>
          <span>heures</span>
        </div>

        <div className="countdown-item">
          <strong>{countdown.minutes}</strong>
          <span>min</span>
        </div>

        <div className="countdown-item">
          <strong>{countdown.seconds}</strong>
          <span>sec</span>
        </div>
      </div>
    </div>
  )
}

function PricingCalculator({ plan }) {
  const [childrenCount, setChildrenCount] = useState(1)
  const [selectedWeeks, setSelectedWeeks] = useState([])

  const priceDetails = useMemo(() => {
    return getTotalPriceDetails(plan, childrenCount, selectedWeeks)
  }, [plan, childrenCount, selectedWeeks])

  const selectedWeekDetails = WEEKS.filter((week) =>
    selectedWeeks.includes(week.id)
  )

  function toggleWeek(weekId) {
    setSelectedWeeks((currentWeeks) => {
      if (currentWeeks.includes(weekId)) {
        return currentWeeks.filter((id) => id !== weekId)
      }

      return [...currentWeeks, weekId]
    })
  }

  function selectAllWeeks() {
    setSelectedWeeks(WEEKS.map((week) => week.id))
  }

  function resetSelection() {
    setSelectedWeeks([])
    setChildrenCount(1)
  }

  return (
    <div className={`pricing-card pricing-calculator-card ${plan.id}`}>
      <div className="pricing-card-header">
        <h3>{plan.title}</h3>
        <div className="pricing-date">{plan.date}</div>
        <div className="pricing-badge">{plan.badge}</div>
      </div>

      <div className="pricing-form">
        <p className="pricing-form-note">{plan.note}</p>

        <label className="pricing-field">
          <span>Nombre d’enfants</span>

          <select
            value={childrenCount}
            onChange={(event) => setChildrenCount(Number(event.target.value))}
          >
            {CHILDREN_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="pricing-field">
          <span>Semaines souhaitées</span>

          <div className="week-choice-grid">
            {WEEKS.map((week) => {
              const isSelected = selectedWeeks.includes(week.id)
              const singleWeekPrice = getSingleWeekPrice(
                plan,
                childrenCount,
                week.id
              )

              const originalSingleWeekPrice =
                singleWeekPrice + getEarlySaving(childrenCount, 1)

              return (
                <label
                  key={week.id}
                  className={`week-choice ${isSelected ? 'selected' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleWeek(week.id)}
                  />

                  <span className="week-choice-title">{week.title}</span>

                  <span className="week-choice-price">
                    1 semaine :

                    {plan.id === 'early' ? (
                      <span className="week-price-row">
                        <span className="pricing-original-price week-original-price">
                          {formatPrice(originalSingleWeekPrice)}
                        </span>

                        <strong className="week-current-price">
                          {formatPrice(singleWeekPrice)}
                        </strong>
                      </span>
                    ) : (
                      <strong className="week-current-price">
                        {formatPrice(singleWeekPrice)}
                      </strong>
                    )}
                  </span>

                  <span className="week-choice-date">{week.dates}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className="pricing-actions">
          <button type="button" onClick={selectAllWeeks}>
            Toutes les semaines
          </button>

          <button type="button" onClick={resetSelection}>
            Réinitialiser
          </button>
        </div>

        <div className="pricing-result">
          <span className="pricing-result-label">Total estimé</span>

          {priceDetails === null ? (
            <strong>Sélectionnez une semaine</strong>
          ) : priceDetails.hasDiscount ? (
            <div className="pricing-result-price-row">
              <span className="pricing-original-price">
                {formatPrice(priceDetails.grossPrice)}
              </span>

              <strong>{formatPrice(priceDetails.finalPrice)}</strong>
            </div>
          ) : (
            <strong>{formatPrice(priceDetails.finalPrice)}</strong>
          )}

          {selectedWeekDetails.length > 0 && (
            <p>
              {childrenCount === 1
                ? 'Pour 1 enfant'
                : `Pour ${childrenCount} enfants`}{' '}
              — {selectedWeekDetails.map((week) => week.title).join(', ')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [now, setNow] = useState(() => new Date())

  const deadline = useMemo(() => {
    return getRegistrationDeadline(now.getFullYear())
  }, [now])

  const isEarlyRateActive = now <= deadline

  const activePlan = useMemo(() => {
    return getActivePlan(isEarlyRateActive)
  }, [isEarlyRateActive])

  const countdown = useMemo(() => {
    return getCountdown(deadline, now)
  }, [deadline, now])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Tarifs &amp; Paiements</h2>
          <p className="pricing-subtitle">
            Calculez facilement le tarif selon le nombre d’enfants et les semaines choisies.
          </p>
        </div>

        <p className="pricing-countdown-message">
          🎉 Ne ratez pas l’offre préférentielle : inscrivez votre enfant avant le 10 juin pour profiter du meilleur tarif!
        </p>

        <CountdownBox
          countdown={countdown}
          isEarlyRateActive={isEarlyRateActive}
        />

        <div className="pricing-calculators fade-in fade-in-delay-2">
          <PricingCalculator plan={activePlan} />
        </div>

        <div className="pricing-links fade-in fade-in-delay-3">
          <a
            href={RULES_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-link"
          >
            📄 Règlement intérieur
          </a>

          <a
            href="https://secure.cardcom.solutions/EA/EA5/eqhjemHj0GdQ7o02jMNQ/PaymentSP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💳 Procéder au paiement
          </a>

          <a
            href="https://forms.gle/hCwCh719686RVyj89"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-link"
          >
            📄 Formulaire d'Inscription
          </a>
        </div>
      </div>
    </section>
  )
}