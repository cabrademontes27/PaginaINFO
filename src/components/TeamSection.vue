<template>
  <section id="team" class="team-section" aria-label="Conoce nuestro equipo">
    <h3>Conoce Nuestro Equipo</h3>
    <p class="team-description">
      Un grupo diverso de ingenieros, diseñadores inclusivos y especialistas en accesibilidad comprometidos con hacer la diferencia.
    </p>
    <div class="team-members">
      <div
        class="team-member"
        v-for="(member, index) in members"
        :key="index"
      >
        <img
          :src="member.image"
          :alt="`Foto de ${member.name}`"
          class="member-image"
        />
        <div class="member-info">
          <p class="member-role">{{ member.role }}</p>
          <p class="member-name">{{ member.name }}</p>
          <div class="member-social">
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamSection",
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.team-section {
  background: var(--strong-coffee);
  padding: 3rem 2rem;
  border-radius: 15px;
  margin-top: 4rem;
  text-align: center;
}

.team-description {
  color: var(--light-coffee);
  max-width: 700px;
  margin: 0.5rem auto 2rem auto;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 1rem;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.member-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--light-coffee);
  margin: 0 auto 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.team-member:hover .member-image {
  transform: scale(1.1);
  border-color: var(--variant2);
}

.member-info {
  padding: 1rem;
}

.member-role {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.member-name {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.member-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.member-social a {
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.member-social a:hover {
  color: var(--light-coffee);
}
</style>
