select "g"."name" as "Genre Name",
       count("a".*) as "Lisa Monroe"
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
  group by "g"."name";
