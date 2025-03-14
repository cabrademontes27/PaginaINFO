<template>
    <div class="document-folder">
      <!-- Folder Header -->
      <div class="folder-header" @click="toggleFolder">
        <i class="fas fa-folder"></i>
        <h3>Documentos del Proyecto</h3>
        <i :class="['fas', isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
      </div>
  
      <!-- Document Grid -->
      <transition name="folder">
        <div v-show="isOpen" class="document-grid">
          <div 
            v-for="(doc, index) in documents" 
            :key="index" 
            class="document-item"
            @click="openDocument(doc)"
          >
            <div class="document-thumbnail">
              <i :class="documentIcon(doc.type)"></i>
            </div>
            <span class="document-title">{{ doc.title }}</span>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MiniaturaDePestañaDeDocumentos',
    props: {
      documents: {
        type: Array,
        default: () => [
          {
            title: "Reporte Final.pdf",
            type: "pdf",
            thumbnail: "/documents/reporte-final.jpg"
          },
          // Add more default documents if needed
        ]
      }
    },
    data() {
      return {
        isOpen: true
      }
    },
    methods: {
      toggleFolder() {
        this.isOpen = !this.isOpen
      },
      documentIcon(type) {
        const icons = {
          pdf: 'far fa-file-pdf',
          doc: 'far fa-file-word',
          ppt: 'far fa-file-powerpoint',
          xls: 'far fa-file-excel',
          img: 'far fa-file-image',
          default: 'far fa-file'
        }
        return icons[type] || icons.default
      },
      openDocument(doc) {
        this.$emit('document-selected', doc)
        // For now just show alert - connect to actual viewer later
        alert(`Opening document: ${doc.title}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .document-folder {
    margin: 2rem 0;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .folder-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: var(--strong-coffee);
    color: white;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .folder-header:hover {
    background: var(--variant2);
  }
  
  .folder-header i:first-child {
    font-size: 1.5rem;
  }
  
  .document-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
  }
  
  .document-item {
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .document-item:hover {
    transform: translateY(-5px);
  }
  
  .document-thumbnail {
    width: 100px;
    height: 130px;
    background: white;
    border-radius: 8px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .document-thumbnail:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .document-thumbnail i {
    font-size: 2.5rem;
    color: var(--variant2);
  }
  
  .document-title {
    display: block;
    font-size: 0.9rem;
    color: var(--variant2);
    word-break: break-word;
  }
  
  /* Folder Animation */
  .folder-enter-active, .folder-leave-active {
    transition: all 0.3s ease;
  }
  .folder-enter-from, .folder-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    .document-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      padding: 1rem;
      gap: 1rem;
    }
    
    .document-thumbnail {
      width: 80px;
      height: 110px;
    }
  }
  </style>