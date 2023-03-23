select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "Total Amount"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."customerId"
  order by "Total Amount" desc;
