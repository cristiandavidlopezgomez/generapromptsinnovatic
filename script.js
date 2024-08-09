function generateContent() {
    const adType = document.getElementById('adType').value;
    const platform = document.getElementById('platform').value;
    const serviceName = document.getElementById('serviceName').value;
    const shortDesc = document.getElementById('shortDesc').value;
    const benefits = document.getElementById('benefits').value.split(',').map(b => b.trim()).join('\n- ');
    const features = document.getElementById('features').value.split(',').map(f => f.trim()).join('\n- ');
    const audience = document.getElementById('audience').value;
    const cta = document.getElementById('cta').value;
    const style = document.getElementById('style').value;
    const format = document.getElementById('format').value;
    const marketingTechniques = document.getElementById('marketingTechniques').value.split(',').map(t => t.trim()).join('\n- ');

    const result = `
    
   Estoy en el proceso de crear un anuncio publicitario que capte la atención de mis clientes y destaque los servicios de mi marca. A continuación, te proporcionaré la información clave que debes utilizar para desarrollar un anuncio efectivo y rentable.

Quiero que asumas el rol de un experto en marketing y community manager profesional. Utiliza todos los datos que te proporcionaré para crear un anuncio que no solo sea ganador, sino también altamente rentable. Emplea tus conocimientos en marketing y redes sociales para maximizar la efectividad del anuncio, aprovechando al máximo la información disponible para obtener los mejores resultados.

**Tipo de Anuncio:** ${adType}
**Plataforma de Publicidad:** ${platform}
**Nombre del Servicio:** ${serviceName}
**Descripción Corta:** ${shortDesc}

**Beneficios Clave:**
- ${benefits}

**Características Destacadas:**
- ${features}

**Público Objetivo:** ${audience}

**Llamado a la Acción (CTA):** ${cta}
**Estilo y Tono:** ${style}
**Formato del Anuncio:** ${format}

**Técnicas de Marketing:**
- ${marketingTechniques}

Genera un anuncio basado en la descripción proporcionada. Analiza el contenido y crea un anuncio capaz de convertir visualizaciones en leads, utilizando técnicas avanzadas de marketing. Realiza un análisis del nicho de mercado en función de los datos proporcionados. Asegúrate de leer y comprender toda la información disponible para desarrollar un anuncio de alto nivel con una alta tasa de éxito.`;

    const instructions = `
**Pasos para Crear el Anuncio:**

1. **Revisar el Tipo de Anuncio**: Define si es una promoción, venta directa, u otro tipo.
2. **Seleccionar la Plataforma**: Elige dónde se publicará el anuncio (Facebook, Instagram, etc.).
3. **Personalizar el Nombre del Servicio**: Asegúrate de que el nombre del servicio sea correcto y destacado.
4. **Describir Brevemente el Servicio**: Usa la descripción corta para captar la atención.
5. **Listar Beneficios y Características**: Asegúrate de que estos sean claros y relevantes para el público objetivo.
6. **Definir el Público Objetivo**: Ajusta el mensaje para que resuene con el grupo demográfico elegido.
7. **Agregar Llamado a la Acción (CTA)**: Incita a la audiencia a tomar una acción específica.
8. **Ajustar el Estilo y Formato**: Asegúrate de que el anuncio sea coherente con el estilo y formato elegidos.
9. **Aplicar Técnicas de Marketing**: Usa las técnicas de marketing para maximizar el impacto del anuncio.

Estas instrucciones te guiarán a través del proceso de creación de un anuncio efectivo y persuasivo.`;

    // Set the results and instructions in the respective textareas
    document.getElementById('result').value = result;
    document.getElementById('instructions').value = instructions;
}

function copyToClipboard() {
    const resultText = document.getElementById('result').value;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado al portapapeles!');
    });
}
