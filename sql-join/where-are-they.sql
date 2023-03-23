select "a"."line1" as "addresses",
       "a"."district",
       "c"."name" as "cities",
       "n"."name" as "countries"
    from "addresses" as "a"
    join "cities" as "c" using ("cityId")
    join "countries" as "n" using ("countryId")
