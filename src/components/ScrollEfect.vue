<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // Method to handle scroll effect
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },

    // Method to toggle the mobile navigation menu
    toggleNav() {
      const nav = document.querySelector('.nav');
      nav.classList.toggle('active');
    },
    methods: {
  handleScroll() {
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  },

  toggleNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  },

  closeNav() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');
  },
},
  },
};
</script>