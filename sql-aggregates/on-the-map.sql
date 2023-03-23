select "c"."name" as "Country",
       count("n".*) as "Number of Cities"
  from "countries" as "c"
  join "cities" as "n" using ("countryId")
  group by "c"."name";
