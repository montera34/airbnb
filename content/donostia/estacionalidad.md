---
title: "Estacionalidad"
menuTitle: "Estacionalidad"
date: 2018-12-05T13:37:01
weight: 3
draft: false
---

Los anuncios disponibles o activos en Airbnb tienen, como otras cuestiones relacionadas con el turismo, una estacionalidad muy marcada en muchas ciudades. En Donostia es conocida esta cuestión desde el siglo pasado, cuando los veraneantes se instalaban allí para pasar los meses de estío. Parece que sigue siendo práctica habitual que los pisos alquilados a estudiantes sean "desalojados" en verano por quincenas o meses para los veraneantes.

En anteriores informes hemos analizado la situación de Airbnb en la ciudad sin tener en cuenta esta estacionalidad tan marcada. Para analizarla hemos utilizado las evaluaciones (*reviews* en la terminología de Airbnb en inglés) que dejan los usuarios tras completar una estancia. No todos dejan este comentario y valoración tras acabar una estancia ([ver en la sección metodología cómo se usan valores entre 30 y 72 por ciento](/metodologia/anuncios-activos/)) pero en cualquier caso sí que sirven como estimación de la cantidad de alquileres y alojamientos activos. Hemos usado los datos de las evaluaciones de InsideAirbnb de abril de 2017 para hacer estos análisis.

### Cada punto es una evaluación a un anuncio de Airbnb en Donostia

{{< figure src="/images/donostia/airbnb-reviews-donostia-2012-2017-b.png" alt="Reviews de Airbnb en Donostia 2012-2016." title="Reviews de Airbnb en Donostia 2012-2016." >}}

Cada punto del anterior gráfico representa una evaluación tras una estancia. Se aprecia como el pico de evaluaciones, y por tanto de alquileres y alojamientos activos, se produce en Agosto. En los siguientes histograma que acumula varios años lo veremos más claro todavía.

### Un pico en agosto

{{< figure src="/images/donostia/airbnb-reviews-por-mes-stacked-donostia-2013-2016.png" alt="Reviews de Airbnb por mes en Donostia 2013-2016." title="Reviews de Airbnb por mes en Donostia 2013-2016." >}}

{{< figure src="/images/donostia/airbnb-reviews-mes-2011-2017_faceted.png" alt="Reviews de Airbnb por mes en Donostia 2013-2016." title="Reviews de Airbnb por mes en Donostia 2013-2016." >}}

En todos ellos se repite el mismo patrón en el que agosto es el mes con más evaluaciones seguidos de julio y septiembre. Si contamos ahora la cantidad de anuncios a los que pertenecen esas evaluaciones, podemos obtener los alojamientos que han obtenido como mínimo una evaluación en cada mes, esto es, que estuvieron de alguna forma activos. En el siguiente gráfico se representan estos alojamientos según su tipo (piso completo, habitación privada o compartida):

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_bar.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." >}}

Si tenemos en cuenta, como hemos indicado antes, que no todos los usuarios deja su evaluación, podemos estimar, usando el 30% como valor los anuncios que habrían estado activos (pero sin recibir evaluación). La línea de puntos indica esa estimación:

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_line_calculated.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017." >}}

Este resultado se ajusta bastante bien a al análisis de anuncios activos que realiza la empresa Airdna mes a mes, que considera los alojamientos que han tenido una reserva en el mes anterior o tienen fechas disponibles para ser alquilados en el futuro. La línea discontinua (anuncios con review en ese mes según las reviews considerando un 30% de usuarios que deja evaluación, datos de InsideAirbnb) concuerda bastante bien con la línea continua (anuncios activos, datos de Airdna):

{{< figure src="/images/donostia/airbnb-listings-insideairbnb-donostia-with-review-mes-2011-2017_rooom-type_line_calculated_vs_airdna.png" alt="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." title="Anuncios con reviews de Airbnb por mes en Donostia 2011-2017 vs Anuncios Activos de Airdna." >}}

Nota: los datos de las reviews de InsideAirbnb están sesgados en el sentido de que solamente contienen datos de las evaluaciones de los anuncios que en el momento del scraping estaban existente.


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


