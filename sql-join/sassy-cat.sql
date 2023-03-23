select "a"."firstName" as "First Name",
       "a"."lastName" as "Last Name"
    from "actors" as "a"
    join "castMembers" using ("actorId")
    join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy'
