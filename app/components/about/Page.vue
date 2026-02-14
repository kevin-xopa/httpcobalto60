<template>
  <v-container style="max-width: 800px" class="py-12">
    <h1 class="text-display page-title mb-2">SOBRE COBALTO 60</h1>
    <p class="page-subtitle mb-12">La historia detrás del nombre.</p>

    <!-- El incidente -->
    <section class="mb-12">
      <h2 class="text-display section-heading mb-4">EL INCIDENTE</h2>
      <v-card color="surface-container-low" flat class="pa-6 border-subtle">
        <h3 class="incident-title mb-4">Ciudad Juárez, 1983</h3>

        <div class="about-text">
          <p>
            En diciembre de 1983, una unidad de radioterapia que contenía
            Cobalto-60 fue robada de un almacén médico en Ciudad Juárez,
            Chihuahua. Los chatareros que la desmantelaron no tenían idea de lo
            que estaban manipulando. Las cápsulas de material radiactivo fueron
            abiertas, y miles de pequeñas bolitas de Cobalto-60 se dispersaron
            por toda la ciudad.
          </p>
          <p>
            El material radioactivo fue mezclado con chatarra y vendido a
            fundidoras. Se fabricaron miles de varillas de acero contaminadas,
            bases de mesas, patas de sillas. Algunas llegaron hasta Estados
            Unidos. La contaminación se extendió silenciosamente, irradiando a
            cientos de personas sin que nadie supiera qué estaba pasando.
          </p>
          <p>
            Cuando finalmente se detectó la radiación — meses después, y solo
            porque un camión mexicano activó detectores de radiación al cruzar
            la frontera en Los Álamos, Nuevo México — ya era tarde para muchos.
            El gobierno mexicano intentó minimizar el incidente. Se calcula que
            más de 4,000 personas fueron expuestas a niveles peligrosos de
            radiación.
          </p>
          <p>
            El terreno donde se desecharon los materiales contaminados fue
            convertido en lo que se conoce como el "Almacén de Desechos
            Radiactivos", un lugar que décadas después seguía siendo zona de
            exclusión.
          </p>
        </div>
      </v-card>
    </section>

    <!-- La conexión -->
    <section class="mb-12">
      <h2 class="text-display section-heading mb-4">LA CONEXIÓN CON HTTP</h2>
      <v-card color="surface-container-low" flat class="pa-6 border-subtle">
        <div class="about-text">
          <p>
            Así como el Cobalto-60 irradiaba en silencio matando sin que nadie
            entendiera qué pasaba, los códigos HTTP están en cada request que
            hacemos y la mayoría de los desarrolladores no los comprenden.
          </p>
          <p>
            Envuelven sus respuestas en estructuras innecesarias, repiten
            información que ya viene en el protocolo, ignoran códigos que
            existen para situaciones específicas. El conocimiento está ahí,
            irradiando, pero nadie lo ve.
          </p>
          <p>
            HTTP Cobalto 60 es un intento de hacer visible lo invisible. De
            explicar cada código a través de algo tan real y crudo que no puedas
            olvidarlo. No es un proyecto chistoso. Es una guía técnica seria
            envuelta en la realidad de México.
          </p>
        </div>
      </v-card>
    </section>

    <!-- Filosofía -->
    <section class="mb-12">
      <h2 class="text-display section-heading mb-4">FILOSOFÍA</h2>
      <v-card color="surface-container-low" flat class="pa-6 border-subtle">
        <div class="about-text">
          <p>
            Cada código HTTP tiene su propia URL, su propia historia mexicana, y
            ejemplos funcionales en cinco lenguajes: JavaScript (Express),
            Python (FastAPI), PHP (Laravel), Rust (Actix Web) y C++ (Crow).
          </p>
          <p>
            El tono es sombrío, directo, sin maquillaje. Si la referencia es una
            tragedia, se trata con respeto pero sin censura. Si es corrupción,
            se dice sin rodeos. Si es una realidad incómoda, se expone tal cual.
          </p>
          <p>
            Promovemos una filosofía clara: el código HTTP ES el mensaje. No
            necesitas envolturas innecesarias. No necesitas repetir en el body
            lo que el protocolo ya dice. Un buen desarrollador conoce y usa los
            códigos HTTP como fueron diseñados.
          </p>
        </div>
      </v-card>
    </section>

    <!-- Stack -->
    <section>
      <h2 class="text-display section-heading mb-4">STACK TECNOLÓGICO</h2>
      <v-card color="surface-container-low" flat class="pa-6 border-subtle">
        <v-table density="comfortable" class="stack-table">
          <tbody>
            <tr v-for="tech in stack" :key="tech.name">
              <td class="stack-name">{{ tech.name }}</td>
              <td class="stack-use">{{ tech.use }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </section>
  </v-container>
</template>

<script setup lang="ts">
const stack = [
  { name: "Nuxt 4", use: "Framework principal (Vue 3 + Composition API)" },
  { name: "Vuetify 3", use: "Sistema de componentes UI" },
  { name: "Shiki", use: "Syntax highlighting multi-lenguaje" },
  { name: "PWA", use: "Instalable y funciona offline" },
  { name: "SSG", use: "Static Site Generation para deploy" },
];
</script>

<style scoped lang="scss">
.page-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: rgb(var(--v-theme-on-surface));
  letter-spacing: 0.1em;
}

.page-subtitle {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.95rem;
}

.section-heading {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-secondary));
  letter-spacing: 0.12em;
}

.incident-title {
  color: rgb(var(--v-theme-primary));
  font-size: 1.2rem;
  font-weight: 400;
}

.about-text p {
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.stack-table {
  background-color: transparent !important;

  td {
    border-bottom-color: var(--co60-border) !important;
    font-size: 0.875rem;
  }
}

.stack-name {
  color: rgb(var(--v-theme-tertiary));
  font-weight: 500;
}

.stack-use {
  color: rgb(var(--v-theme-secondary));
}
</style>
