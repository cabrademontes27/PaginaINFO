<template>
  <div class="policy">
    <h1>Política de Privacidad de VozAmiga</h1>
    <p class="updated">Última actualización: 2025-08-30</p>

    <section>
      <h2>1. Información que recopilamos</h2>
      <ul>
        <li><b>Datos personales:</b> nombre y correo electrónico proporcionados voluntariamente.</li>
        <li><b>Datos de voz:</b> comandos de voz procesados localmente en el dispositivo (modelo Vosk).</li>
        <li><b>Datos de cámara:</b> imágenes y texto para reconocimiento de medicamentos.</li>
        <li><b>Datos de ubicación:</b> coordenadas y direcciones para funciones de emergencia y asistencia.</li>
        <li><b>Datos de uso:</b> modelo del dispositivo, versión de Android, versión de la App, identificadores de sesión, registros de fallos y estadísticas de rendimiento.</li>
      </ul>
    </section>

    <section>
      <h2>2. Finalidad del uso de datos</h2>
      <p>Brindar las funcionalidades de asistencia por voz, lectura de medicamentos, envío/visualización de ubicación y mejora continua de accesibilidad.</p>
    </section>

    <section>
      <h2>3. Compartición y almacenamiento</h2>
      <ul>
        <li>No vendemos ni compartimos datos con fines comerciales.</li>
        <li>Los datos se transmiten y almacenan en <b>servidores de MongoDB</b> de forma segura.</li>
        <li>El reconocimiento de voz se realiza <b>de forma local</b> en el dispositivo; no se envían audios a servidores externos.</li>
      </ul>
    </section>

    <section>
      <h2>4. Seguridad</h2>
      <p>Usamos HTTPS, controles de acceso y prácticas de minimización de datos. Eliminamos información a solicitud del usuario.</p>
    </section>

    <section>
      <h2>5. Derechos del usuario</h2>
      <ul>
        <li>Acceso, rectificación y eliminación de sus datos.</li>
        <li>Revocación de permisos de cámara, micrófono y ubicación desde el dispositivo.</li>
        <li>Eliminación de cuenta y datos asociados previa solicitud.</li>
      </ul>
    </section>

    <section>
      <h2>6. Público objetivo</h2>
      <p>La App está pensada para todas las edades. Para menores, su uso debe realizarse con supervisión y consentimiento de padres o tutores.</p>
    </section>

    <section>
      <h2>7. Cambios a esta política</h2>
      <p>Podemos actualizar este documento; notificaremos cambios relevantes dentro de la App o en este sitio.</p>
    </section>

    <section>
      <h2>8. Contacto</h2>
      <p>Soporte: <a href="mailto:contacto.vozamiga@gmail.com">contacto.vozamiga@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
};
</script>

<style scoped>
.policy {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
  line-height: 1.6;
  color: var(--variant2);
  background: var(--light-coffee);
}
h1 { color: var(--variant2); margin-bottom: .25rem; }
.updated { color: var(--variant1); margin-bottom: 1.5rem; }
h2 {
  color: var(--variant1);
  margin-top: 1.75rem;
  margin-bottom: .5rem;
  font-size: 1.15rem;
}
ul { padding-left: 1.25rem; }
a { color: var(--variant2); text-decoration: underline; }
</style>
