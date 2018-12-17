---
title: "Estacionalidad"
menuTitle: "Estacionalidad"
date: 2018-12-05T13:37:01
weight: 3
draft: false
---

Los anuncios disponibles o activos en Airbnb tienen, como otras cuestiones relacionadas con el turismo, una estacionalidad muy marcada en muchas ciudades. En Donostia es conocida esta cuestión desde el siglo pasado, cuando los veraneantes se instalaban allí para pasar los meses de estío. Parece que sigue siendo práctica habitual que los pisos alquilados a estudiantes sean "desalojados" en verano por quincenas o meses para los veraneantes.

En anteriores informes hemos analizado la situación de Airbnb en la ciudad sin tener en cuenta esta estacionalidad. Para analizarla hemos utilizado las evaluaciones (*reviews* en la terminología de Airbnb en inglés) que dejan los usuarios tras completar una estancia. Una evaluación es un comentario público que envía un usuario sobre el alojamiento en el que ha estado. No todos los usuarios dejan esta evaluación y valoración tras acabar una estancia ([ver en la sección metodología cómo se usan valores entre 30 y 72 por ciento](/metodologia/anuncios-activos/)) pero sí que nos sirven como estimación de la cantidad de alquileres y alojamientos activos. Hemos usado los datos de las evaluaciones de InsideAirbnb de abril de 2018 y varias fechas en 2018 para hacer estos análisis.

### Cada punto es una evaluación a un anuncio de Airbnb en Donostia

{{< figure src="/images/donostia/airbnb-reviews-donostia-2012-201811_g.png" alt="Reviews de Airbnb en Donostia 2012-2016." title="Reviews de Airbnb en Donostia 2012-2016." >}}

Cada punto del anterior gráfico representa una evaluación tras una estancia. Se aprecia cómo hay mayor densidad de puntos, esto es, mayor número de evaluaciones, y por tanto de alquileres y alojamientos activos, en torno a los meses de verano. En los siguientes histograma que acumulan varios años lo veremos más claro todavía.

### El verano es la temporada alta

{{< figure src="/images/donostia/airbnb-reviews-por-mes-stacked-donostia-2011-2018.png" alt="Reviews de Airbnb en Donostia 2013-2018." title="Reviews de Airbnb en Donostia 2013-2018." >}}

{{< figure src="/images/donostia/airbnb-reviews-mes-2013-2018_faceted-year.png" alt="Reviews de Airbnb por mes en Donostia 2013-2018." title="Reviews de Airbnb por mes en Donostia 2013-2018." >}}

En todos ellos se repite el mismo patrón: agosto es el mes con más evaluaciones seguidos de julio y luego de septiembre. 

Nota: los datos de las reviews de InsideAirbnb están sesgados en el sentido de que solamente contienen datos de las evaluaciones de los anuncios que en el momento del *scraping* estaban existente. La captura de las evaluaciones se hace a partir de los anuncios encontrados en ese momento, esto es, no se guardan las evaluaciones que sí han existido pero que pertecen a pisos no están en la plataforma. Por eso usamos para este análisis los 7 archivos de 7 fechas diferentes de InsideAirbnb (2018-11-26, 2018-10-20, 2018-09-27, 2018-08-28, 2018-07-31, 2018-04-21 y 2017-03-00), eliminando convenientemente las *reviews* duplicadas, para reducir el sesgo que supone la pérdida de datos de los pisos no encontrados.

Si vemos el mismo gráfico que antes pero coloreando las reviews según cuándo fueron *scrapeadas*:

{{< figure src="/images/donostia/airbnb-reviews-mes-2013-2018_faceted-year_color-scrapdate.png" alt="Reviews de Airbnb por mes en Donostia 2013-2018." title="El color indica la fecha de captura del dato de la review" >}}

Vemos, por ejemplo, que hay una buena parte de las *reviews* de verano de 2016 que no habrían sido capturadas si no fuera por el scraping de marzo de 2017. Es lícito pensar que dada la ausencia de una captura de datos periódica y la volatilidad de los anuncios en Airbnb, estos cálculos resulten conservadores respecto del verdadero número de evaluaciones realizadas. Así que tomaremos estos datos como base de las estimaciones más estrictas.

### Anuncios que tuvieron evaluaciones

Conocer la cantidad de evaluaciones por mes nos permie calcular el número de anuncios a los que pertenecen. De este modo obtenemos los alojamientos que tuvieron una al menos evaluación, esto es, que tuvieron como mínimo una estancia ese mes. En el siguiente gráfico se representan estos alojamientos según su tipo (piso completo, habitación privada o compartida):

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2018_rooom-type_bar.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2018." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2018." >}}

Si tenemos en cuenta, como hemos indicado antes, que no todos los usuarios deja una evaluación al terminar una estancia, podemos estimar, usando el 30% como el porcentaje de usuarios que dejan evaluación, el número de anuncios *total* que habrían tenido al menos una estancia (aunque no hubieran recibido evaluación). La línea de puntos indica esa estimación basada en eñ 30%:

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_line_calculated.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." >}}

Este resultado se ajusta bastante bien a al análisis de anuncios activos que realiza la empresa Airdna mes a mes, que considera los alojamientos que han tenido una reserva en el mes anterior o tienen fechas disponibles para ser alquilados en el futuro. La línea discontinua (anuncios con review en ese mes según las reviews considerando un 30% de usuarios que deja evaluación, datos de InsideAirbnb) concuerda bastante bien con la línea continua (anuncios activos, datos de Airdna):

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_line_calculated_vs_airdna.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." >}}

Si en vez de hacer la estimación basada en el 30% usamos un intervalo que va del 30 al 70 por ciento, obtenemos unas "zonas" en torno a las cuales se moverán las cifras de los alojamientos turísticos disponibles y activos cada mes.


{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2018_rooom-type_line_calculated_vs_airdna_area.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." >}}

Si admás introducimos en el gráfico los valores de las diferentes bases de datos que manejamos vemos cómo se parecen unos y otros y nos permiten evaluar la estimación:

{{< figure src="/images/donostia/airbnb-listings-donostia-with-review-by-room-type_calculated-review-based_airdna_source-points.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." >}}





## Comparación con Bilbao

Para comparar mostramos el mismo gráfico anterior para la ciudad de Bilbao: la estacionalidad no está tan marcada, aunque el pico de alojamientos con evaluaciones sigue teniendo el pico en agosto (ojo, las escalas verticales de ambos son diferentes, Bilbao tiene la mitad de anuncios aproximadamente):


{{< cols >}}
{{% col md="6" %}}
{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_bar.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." >}}
{{% /col %}}
{{% col md="6" %}}
{{< figure src="/images/donostia/airbnb-listings-insideairbnb-bilbao-with-review-mes-2011-2017_rooom-type_bar.png" alt="Anuncios con reviews de Airbnb por mes en Bilbao 2011-2017." title="Anuncios con reviews de Airbnb por mes en Bilbao 2011-2017." >}}
{{% /col %}}
{{< /cols >}}


