Aufgabe: Funktion toPositiveTemporal() bauen

Hier soll eine Funktion gebaut werden, die aus den Inputs ‘Zeiteinheit’ (‘M’/’Month’ – ‘D’/’Day’ – ‘W’/’Week’ – ‘Y’/’Year’) <-- nicht case-sensitive
und Zeitmenge (z.B. ‘1’/’6’/’12’)
eine/n ‘duration’/Zeitraum im folgenden Format erbaut und zurückgibt:

type PositiveTemporal = {
| { days: string}
| { weeks: string}
| { months: string}
| { years: string}
| { hours: string}
| { minutes: string}
}

Beispiele:

toPositiveTemporal(‘6’, ‘M‘, true)
=> {months: '6'}
toPositiveTemporal(‘1’, ‘Month’, ‘nonNegative’)
=> {months: '1}
toPositiveTemporal(‘1’, ‘y’)
=> {years: '1'}
toPositiveTemporal('0', 'M')
=> 'amount zero in toPositiveTemporal is invalid, unit: M'
toPositiveTemporal('0', '’Year’, true)
=> {years: '0'}
toPositiveTemporal('31', 'day')
=> {days: '31'}
toPositiveTemporal('2', 'm', false)
=> {months: '2'}

Für den Fall, dass die Zeitmenge 0 ist, soll ein String mit Errormessage zurückgeben werden. Dieser soll auch den Zeiteinheit-Input enhalten. (`amount zero in toPositiveTemporal is invalid, unit: [unit]`)
[Es soll einen dritten Input in die Funktion geben, der optional ist. Wenn dieser (z. B. auf true oder ‘nonNegativ’) gesetzt ist, soll dieser Error nicht gesetzt werden, denn es handelt sich um ein ‘nonNegativTemporal’.]

Anmerkungen:

- alle Inputs haben die Form eines Strings (letzter optional auch boolescher Wert)
- die Zeitmenge kann eine beliebige Größe annehmen
- es ist nicht nötig, dass beispielsweise automatisch aus 12 Monaten ein Jahr gemacht wird oder aus 31 Tagen ein Monat
- die String-Inputs sollten nicht case-sensitive sein
- besonders gut wäre es, wenn Typescript-Definitionen, wann immer sinnvoll möglich, verwendet werden würden
