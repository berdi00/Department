init:
	psql -U dova -d department -f ./sql/create.sql
	psql -U dova -d department -f ./sql/insert.sql

refresh:
	psql -U dova -d postgres -f ./sql/refresh.sql
