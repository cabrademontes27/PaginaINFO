<template>
  <section id="investigation" class="research-section" aria-label="Investigación y metodología">
    <div class="research-container">
      <!-- Left Column - Text Content -->
      <div class="research-main">
        <h2>Metodología Científica</h2>
        <p class="section-subtitle">
          Un enfoque estructurado para la innovación accesible
        </p>

        <!-- Interactive Tabs -->
        <div class="research-tabs">
          <button
            v-for="(tab, index) in researchTabs"
            :key="index"
            @click="activeTab = index"
            :class="{ active: activeTab === index }"
          >
            {{ tab.title }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <div
            v-for="(tab, index) in researchTabs"
            :key="index"
            v-show="activeTab === index"
            class="fade-in"
          >
            <h3>{{ tab.subtitle }}</h3>
            <p>{{ tab.content }}</p>
          </div>
        </div>

        <!-- Document Folder Component -->
        <MiniaturaDePestañaDeDocumentos
          :documents="documents"
          @document-selected="$emit('document-selected', $event)"
        />
      </div>

      <!-- Right Column - Datos Curiosos -->
      <div class="research-sidebar">
        <div class="curiosities-card">
          <div class="divider-line"></div>
          <h4>Datos Curiosos</h4>

          <div
            class="curiosity-item"
            v-for="(item, i) in curiosities"
            :key="i"
          >
            <i :class="item.icon"></i>
            <div>
              <span>{{ item.stat }}</span>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MiniaturaDePestañaDeDocumentos from "./MiniaturaDePestañaDeDocumentos.vue";

export default {
  name: "ResearchSection",
  components: {
    MiniaturaDePestañaDeDocumentos,
  },
  props: {
    researchTabs: Array,
    documents: Array,
    curiosities: Array,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style scoped>
.research-section {
  padding: 4rem 2rem;
  background: var(--light-coffee);
}

.research-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 3rem;
}

.research-main h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--variant1);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.research-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.research-tabs button {
  background: none;
  border: 2px solid var(--strong-coffee);
  color: var(--variant2);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.research-tabs button.active {
  background: var(--strong-coffee);
  color: white;
}

.research-tabs button:hover {
  transform: translateY(-2px);
}

.tab-content {
  border-left: 3px solid var(--strong-coffee);
  padding-left: 2rem;
}

.tab-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.tab-content p {
  line-height: 1.8;
  opacity: 0.9;
}

.research-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* =========================
   Curiosities Card
========================= */
.curiosities-card {
  background: linear-gradient(135deg, var(--variant1) 20%, var(--variant2) 100%);
  color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


.curiosities-card h4 {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid white;
}


.curiosity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.curiosity-item i {
  font-size: 1.8rem;
  width: 40px;
  text-align: center;
  color: #ffffff;
  opacity: 0.9;
}

.curiosity-item span {
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;
}

.curiosity-item p {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
  color: #ffffff !important;
}

.curiosity-item:hover {
  transform: translateX(10px);
  opacity: 0.9;
}

/* Animaciones */
.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .research-container {
    grid-template-columns: 1fr;
  }

  .research-tabs button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .tab-content {
    padding-left: 1rem;
  }
}
</style>
