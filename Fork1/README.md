Aufgabe: Funktion – Array von Bonuszeiten

In diesem Fall soll aus einem Objekt (ein Kunde) als Input der Funktion
'toExtractDates' ein Array aus Objekten gebaut werden, dass Zeiträume (Start- und Enddaten) enthält.
Ein Element des Arrays soll jeweils ein Objekt enhalten. Dieses Objekt enhält jeweils ein Startdatum und ein Entdatum.
Relevante Daten sind unter dem optionalen Property 'ListOfPeriods' zu finden.

Die Ergebniss sollten Beispielsweise so aussehen:

toExtractDates(customer1) ("ListOfPeriods": " 15.03.2017 - 01.05.2017")
=> [{
startDate: '15.03.2017',
endDate: '01.05.2017'
}]

toExtractDates(customer2) ("ListOfPeriods": "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008")
=> [{
startDate: '16.06.2008',
endDate: '11.07.2008'
},
{
startDate: '12.08.2008'
endDate: '11.11.2008'
}]

toExtractDates(customer3) ("ListOfPeriods": "NULL")
=> []

toExtractDates(customer4) (keine Property "ListOfPeriods")
=> []

Anmerkungen:

- wenn sinnvoll möglich, sollten TypeScript Definitionen verwendet werden
- es können (beliebig viele) n-Zeiträume im 'ListOfPeriods' definiert sein
- zwar ist das Format mit "Datum11 - Datum12 | Datum21 - Dautum22 | ..." fest, jedoch können Leerzeichen am Anfang, am Ende und zwischendrin entweder existieren, oder nicht da sein.
- wenn die Daten als Strings nicht die erwartete Länge haben, sollte anstatt eines Array mit Werten ein Array mit Error-String ('string length is invalid') ausgegeben werden

- Beispiele für Customer sind in ./src/data/customer.js zu finden.

Zum Überprüfen Ihrer Lösung können Sie im Abschnitt Tests schauen.
