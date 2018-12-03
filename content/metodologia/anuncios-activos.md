---
title: "Anuncios activos de Airbnb"
date: 2018-10-30T22:26:51+01:00
draft: false
---

El análisis de la situación de Airbnb en un determinado territorio requiere, para un adecuado análisis, definir qué anuncios están activos, esto es, cuáles se están alquilando o están disponibles para ser alquilados en un determinado periodo.

En la plataforma Airbnb hay anuncios inactivos. Saber qué anuncios están inactivos es complicado. Además un anuncio puede tener más o menos actividad, así que una vez conocido su nivel de actividad hay que decidir si lo consideramos activo o inactivo.

Hay anuncios que pueden estar abandonados, que se usaron en algún momento y luego el propietario dejo de alquilar su alojamiento, al menos usando la plataforma Airbnb. También puede ocurrir que un anuncio tenga una actividad estacional, que solo esté activos durante un periodo durante el año. Esto ocurre por ejemplo en [Pamplona durante la semana de San Fermines](/pamplona/alojamientos-airbnb-anfitrion/#habitaciones-o-balcones).

A continuación explicamos algunos características del sistema de anuncios de Airbnb que se suelen usar para hacer estimaciones sobre la cantidad de anuncios activos.

### Disponibilidad de un alojamiento
Cuando se publica un anuncio en Airbnb se tiene que definir su disponibilidad a futuro: cuantos días en los próximos meses se podrá alquilar. Se puede definir la disponibilidad para los próximos 12 meses.

{{< figure src="/images/metodologia.airbnb.listing.calendario.disponibilidad.png" alt="Calendario para definir la disponibilidad para que un alojamiento sea alquilado en Airbnb" title="Calendario para definir la disponibilidad para que un alojamiento sea alquilado en Airbnb">}}

Según el uso que haga el propietario del alojamiento y la actividad económica que quiera llevar a cabo Airbnb clasifica el anuncio como vivienda principal, segunda vivienda o espacio no residencial u hotel. En función del tipo de anuncio seleccionado la configuración por omisión del calendario de disponibilidad cambia. Para una vivienda principal ninguna fecha está disponible a menos que sea habilitada.

{{< figure src="/images/metodologia.airbnb.listing.tipo.png" alt="Opciones para elegir el tipo de anuncio según la actividad económica que se vaya a hacer." title="Opciones para elegir el tipo de anuncio según la actividad económica que se vaya a hacer.">}}

### Evaluaciones de un alojamiento
Cuando un usuario ha alquilado un alojamiento y ha finalizado su estancia puede escribir una evaluación o *review* de su experiencia. Las evaluaciones son públicas y están disponibles en su totalidad en la página del anuncio. Dejar una evaluación no es obligatorio aunque el sistema de reserva de Airbnb anima a los usuarios a que lo hagan.

Hay mucha disparidad en las cifras sobre el porcentaje de usuarios que deja una evaluación:

+ Según fuents no oficiales de Airbnb [el 72% de los usuarios escribía evaluaciones](https://www.quora.com/What-percent-of-Airbnb-hosts-leave-reviews-for-their-guests) en 2012.
+ 30,5% (basado en la comparació nde datos públicos de evaluaciones del infome del New York Attorney General’s en octubre de 2014).
+ [Murray Cox de InsideAirbnb usa un 50%](http://insideairbnb.com/about.html), basado en la media casi exacta de los porcentajes anteriores, para su "Occupancy Model. 

## Definición de anuncio activo
Murray Cox, creador de [Inside Airbnb](http://insideairbnb.com), apunta que la definición de anuncio activo [dependerá del objetivo del análisis donde se vayan a usar los datos](https://twitter.com/InsideAirbnb/status/988886252329095168). Su método consiste en analizar la fecha de la última evaluación junto con la frecuencia y el número total de evaluaciones.

En [Inside Airbnb cuestionan la fiabilidad del calendario de disponibilidad de un anuncio](http://insideairbnb.com/about.html#disclaimers): "algunos anfitriones no mantienen sus calendarios actualizados o los tienen muy disponibles, incluso cuando viven en su propia casa/apartamento" por lo tanto es preciso combinar este análisis asegurándose de que hayan sido reservados recientemente (han tenido una evaluación en los últimos 6 meses) y frecuentemente (número de noches alquiladas por año mayor que el ¿límite/umbral? para esa ciudad).

Parece necesario entonces, para clasificar un anuncio como activo, combinar el análisis de una serie de variables. Un anuncio activo puede definirse por una combinación de variables:

 + El que ha recibido evaluaciones en un determinado periodo [pasado]. Como hemos visto no todos los anuncios que han tenido una reserva llegan a tener evaluación, pero puede ser un buen indicador de la ocupación de un alojamiento.
 + El que está visible en la web en un determinado momento [presente]. Quedarían fuera los que han sido dados de baja.
 + El que tiene fechas disponibles para ser alquilado [futuro]. El periodo máximo para definir la disponibilidad de un alojamiento es un año, así que éste sería el periodo de tiempo a analizar.
 

## Anuncios activos por mes
Para contar los activos en un determinado mes (la empresa Airdna lo hace así “An active rental is a property that has had at least one available day or property day in the previous month. Available day means the host had made the property available to rent”, y tiene sentido, hay que delimitar el periodo que se quiere estudiar) podemos seleccionar los que cumplan alguna de las siguientes características:

+ tengan fechas disponibles (que la significa que la fecha de “revised” en las bases de datos de datahippo.org sea de ese mes o anterior)
+ haya tenido reserva en el mes anterior o en ese mismo (eso lo podemos saber por la fecha de las last review del scraping que hemos desarrollado)


