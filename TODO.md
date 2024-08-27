# TODO
- Finishing
- Add Google Map API
- Delivery/Taken/Available Date
- If property is taken, display "Sold/Rented" in the property details page.
- Price: 1,500,000
- "installment.price": 2,000,000
- "installment.downPayment": 500,000
- "installment.paymentAmount" 25,000
- "installment.paymentPeriod": 1: Per Month
- "installment.numberOfPayments": number of payments
- "installment.years": number years
- Property Price Change Page: Increase/Decrease prices by X percentage/amount
- Add Property Price Change Log
- Send Campaign Mails to certain owners.
- Review Owners form
- Make any user input/filter search lazy request
- Allow agents to edit only their own properties
- Allow agents to see properties of their own and of other agents except owner details (in view details popup)


- Admin 
    - Properties Page
        - Add Layout Size Column
            - It Displays number of bedrooms (with icon), bathrooms (with icon) and area size (in m)
        - Add Type Column
- Add quick create button that collects important information for the property in the first page

Create new module called `locations` this module has single request `GET /locations` with single query param `q: required`.

The idea of this module is to flat all data from `cities` `regions` `districts` `compounds` and `streets`.

The columns will be as follows:

- `title`: Location title, see below
- `type`: location type: `city` | `district` | `region` | `compound` | `street`
- `typeId`: Id of the location type
- `isActive`: If the location is active or not, will be taken from the location type itself
- `sortOrder`: Will be taken from the location type itself

### Location title

Location title will be as follows:

- If type is `region` then the title will be the region name i.e `Greater Cairo`
- If type is `city` then the title will be the city name i.e `Cairo`, if the city is associated with region, then the title will be city name then region name i.e `Cairo, Greater Cairo`
- If type is `district` then the title will be the district name then comma and then the city name i.e `Nasr City, Cairo`
- If type is `compound` then the title will be the compound name then comma and then the district name then comma and then the city name i.e `Palm Hills, Giza`
- If type is `street` then the title will be the street name then comma and then the district name then comma and then the city name i.e `El Nasr, Nasr City, Cairo`