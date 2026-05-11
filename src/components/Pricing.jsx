import { useMemo, useState } from 'react'

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
        discount: 102,
      },
      2: {
        oneWeekExceptWeek3: 1000,
        oneWeekWithWeek3: 1200,
        twoWeeksExceptWeek3: 2000,
        twoWeeksWithWeek3: 2200,
        threeWeeks: 2800,
        discount: 204,
      },
      3: {
        oneWeekExceptWeek3: 1500,
        oneWeekWithWeek3: 1800,
        twoWeeksExceptWeek3: 3000,
        twoWeeksWithWeek3: 3300,
        threeWeeks: 4050,
        discount: 450,
      },
      4: {
        oneWeekExceptWeek3: 2000,
        oneWeekWithWeek3: 2400,
        twoWeeksExceptWeek3: 4000,
        twoWeeksWithWeek3: 4400,
        threeWeeks: 5400,
        discount: 600,
      },
      5: {
        oneWeekExceptWeek3: 2500,
        oneWeekWithWeek3: 3000,
        twoWeeksExceptWeek3: 5000,
        twoWeeksWithWeek3: 5500,
        threeWeeks: 6600,
        discount: 900,
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
        discount: 102,
      },
      2: {
        oneWeekExceptWeek3: 1100,
        oneWeekWithWeek3: 1300,
        twoWeeksExceptWeek3: 2200,
        twoWeeksWithWeek3: 2400,
        threeWeeks: 2950,
        discount: 204,
      },
      3: {
        oneWeekExceptWeek3: 1650,
        oneWeekWithWeek3: 1950,
        twoWeeksExceptWeek3: 3300,
        twoWeeksWithWeek3: 3600,
        threeWeeks: 4350,
        discount: 450,
      },
      4: {
        oneWeekExceptWeek3: 2400,
        oneWeekWithWeek3: 2800,
        twoWeeksExceptWeek3: 4800,
        twoWeeksWithWeek3: 5200,
        threeWeeks: 6000,
        discount: 600,
      },
      5: {
        oneWeekExceptWeek3: 2750,
        oneWeekWithWeek3: 3250,
        twoWeeksExceptWeek3: 5500,
        twoWeeksWithWeek3: 6000,
        threeWeeks: 7350,
        discount: 900,
      },
    },
  },
]

function formatPrice(price) {
  return `${price.toLocaleString('fr-FR')} ₪`
}

function getTotalPrice(plan, childrenCount, selectedWeeks) {
  const selectedCount = selectedWeeks.length
  const includesWeek3 = selectedWeeks.includes('week3')
  const rates = plan.rates[childrenCount]

  if (selectedCount === 0) return null

  if (selectedCount === 1) {
    return includesWeek3
      ? rates.oneWeekWithWeek3
      : rates.oneWeekExceptWeek3
  }

  if (selectedCount === 2) {
    return includesWeek3
      ? rates.twoWeeksWithWeek3
      : rates.twoWeeksExceptWeek3
  }

  if (selectedCount === 3) {
    return rates.threeWeeks
  }

  return null
}

function PricingCalculator({ plan }) {
  const [childrenCount, setChildrenCount] = useState(1)
  const [selectedWeeks, setSelectedWeeks] = useState([])

  const totalPrice = useMemo(() => {
    return getTotalPrice(plan, childrenCount, selectedWeeks)
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
              const rates = plan.rates[childrenCount]

              const singleWeekPrice =
                week.id === 'week3'
                  ? rates.oneWeekWithWeek3
                  : rates.oneWeekExceptWeek3

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
                    1 semaine : {formatPrice(singleWeekPrice)}
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

          <strong>
            {totalPrice === null
              ? 'Sélectionnez une semaine'
              : formatPrice(totalPrice)}
          </strong>

          {selectedWeekDetails.length > 0 && (
            <p>
              {childrenCount === 1
                ? 'Pour 1 enfant'
                : `Pour ${childrenCount} enfants`}{' '}
              — {selectedWeekDetails.map((week) => week.title).join(', ')}
            </p>
          )}

          {selectedWeeks.length === 3 && (
            <p className="pricing-discount">
              Réduction incluse : {formatPrice(plan.rates[childrenCount].discount)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Tarifs &amp; Paiements</h2>
          <p className="section-subtitle">
            Calculez facilement le tarif selon le nombre d’enfants et les semaines choisies.
          </p>
        </div>

        <div className="pricing-calculators fade-in fade-in-delay-1">
          {PRICING_PLANS.map((plan) => (
            <PricingCalculator key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="pricing-links fade-in fade-in-delay-3">
          <a
            href="https://b5bdff14-f890-41f8-a9ba-fb6dd6794f71.filesusr.com/ugd/fd75f0_20b46079d85b4f8388d86e0b34ca0d4e.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-link"
          >
            📄 Règlement intérieur
          </a>

          <a
            href="https://secure.cardcom.solutions/EA/EA5/ROfIyK9ZEariSyVato2g/Order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💳 Procéder au paiement
          </a>
        </div>
      </div>
    </section>
  )
}