select "f"."releaseYear" as "Release Year",
       "g"."name" as "Genre Name"
    from "genres" as "g"
    join "filmGenre" using ("genreId")
    join "films" as "f" using ("filmId")
  where "f"."title" = 'Boogie Amelie'
