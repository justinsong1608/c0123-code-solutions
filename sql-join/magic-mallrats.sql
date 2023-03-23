select "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name"
    from "customers" as "c"
    join "rentals" using ("customerId")
    join "inventory" using ("inventoryId")
    join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats'
