/**
 * PRUEBAS UNITARIAS SIMPLIFICADAS - PROYECTO GEOFIRES
 * ===================================================
 * 
 * Versión corregida del sistema de pruebas sin colorByConfidence y tileLayerConfig
 */

// ============================================================================
// FUNCIONES DE PRUEBA SIMPLIFICADAS
// ============================================================================

/**
 * Ejecutar todas las pruebas
 */
function runAllTests() {
    console.clear();
    console.log('🧪 INICIANDO TODAS LAS PRUEBAS...');
    console.log('=====================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    // Pruebas de utilidades
    console.group('📊 Pruebas de Utilidades (helpers.js)');
    
    try {
        // Prueba 1: isInColombia con coordenadas válidas
        total++;
        if (isInColombia(4.7110, -74.0721) === true) {
            console.log('✅ isInColombia(4.7110, -74.0721) retorna true');
            passed++;
        } else {
            console.error('❌ isInColombia(4.7110, -74.0721) debería retornar true');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de isInColombia:', error);
        failed++;
    }
    
    try {
        // Prueba 2: isInColombia con coordenadas fuera de Colombia
        total++;
        if (isInColombia(40.7128, -74.0060) === false) {
            console.log('✅ isInColombia(40.7128, -74.0060) retorna false');
            passed++;
        } else {
            console.error('❌ isInColombia(40.7128, -74.0060) debería retornar false');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de isInColombia:', error);
        failed++;
    }
    
    try {
        // Prueba 3: formatAcqTime
        total++;
        if (formatAcqTime(1430) === '14:30') {
            console.log('✅ formatAcqTime(1430) retorna 14:30');
            passed++;
        } else {
            console.error('❌ formatAcqTime(1430) debería retornar 14:30');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de formatAcqTime:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de constantes
    console.group('⚙️ Pruebas de Constantes (constants.js)');
    
    try {
        // Prueba 4: colombiaBounds
        total++;
        if (colombiaBounds && colombiaBounds.length === 2) {
            console.log('✅ colombiaBounds está definido y tiene 2 elementos');
            passed++;
        } else {
            console.error('❌ colombiaBounds debería estar definido y tener 2 elementos');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de colombiaBounds:', error);
        failed++;
    }
    
    try {
        // Prueba 5: mapConfig
        total++;
        if (mapConfig && mapConfig.center && mapConfig.zoom) {
            console.log('✅ mapConfig está definido con center y zoom');
            passed++;
        } else {
            console.error('❌ mapConfig debería estar definido con center y zoom');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de mapConfig:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de configuración
    console.group('🔧 Pruebas de Configuración (config.js)');
    
    try {
        // Prueba 6: config.API_URL
        total++;
        if (config && config.API_URL && typeof config.API_URL === 'string') {
            console.log('✅ config.API_URL está definido y es string');
            passed++;
        } else {
            console.error('❌ config.API_URL debería estar definido y ser string');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de config.API_URL:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de mapa
    console.group('🗺️ Pruebas de Mapa');
    
    try {
        // Prueba 7: Configuración del mapa
        total++;
        if (mapConfig.center[0] === 4.6 && mapConfig.center[1] === -74.1) {
            console.log('✅ Centro del mapa configurado correctamente');
            passed++;
        } else {
            console.error('❌ Centro del mapa debería ser [4.6, -74.1]');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de configuración del mapa:', error);
        failed++;
    }
    
    try {
        // Prueba 8: Zoom del mapa
        total++;
        if (mapConfig.zoom === 6) {
            console.log('✅ Zoom del mapa configurado correctamente');
            passed++;
        } else {
            console.error('❌ Zoom del mapa debería ser 6');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de zoom del mapa:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de servicios
    console.group('🔌 Pruebas de Servicios');
    
    try {
        // Prueba 9: URL de API
        total++;
        if (config.API_URL && config.API_URL.includes('firms')) {
            console.log('✅ URL de API contiene "firms"');
            passed++;
        } else {
            console.error('❌ URL de API debería contener "firms"');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de URL de API:', error);
        failed++;
    }
    
    try {
        // Prueba 10: Función isInColombia disponible
        total++;
        if (typeof isInColombia === 'function') {
            console.log('✅ Función isInColombia está disponible');
            passed++;
        } else {
            console.error('❌ Función isInColombia debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de función isInColombia:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de marcadores
    console.group('📍 Pruebas de Marcadores');
    
    try {
        // Prueba 11: Función createPopupContent
        total++;
        if (typeof createPopupContent === 'function') {
            console.log('✅ Función createPopupContent está disponible');
            passed++;
        } else {
            console.error('❌ Función createPopupContent debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de función createPopupContent:', error);
        failed++;
    }
    
    try {
        // Prueba 12: Generación de contenido HTML
        total++;
        const mockProperties = {
            acq_date: '2024-01-15',
            acq_time: '1430',
            brightness: '320.5',
            confidence: '85',
            frp: '12.3',
            latitude: 4.7110,
            longitude: -74.0721
        };
        
        const popupContent = createPopupContent(mockProperties);
        if (typeof popupContent === 'string' && popupContent.includes('FIRMS MODIS (24h)')) {
            console.log('✅ createPopupContent genera contenido HTML válido');
            passed++;
        } else {
            console.error('❌ createPopupContent debería generar contenido HTML válido');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de generación de contenido HTML:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Pruebas de integración
    console.group('🔗 Pruebas de Integración');
    
    try {
        // Prueba 13: Funciones disponibles
        total++;
        if (typeof isInColombia === 'function' && 
            typeof formatAcqTime === 'function') {
            console.log('✅ Todas las funciones principales están disponibles');
            passed++;
        } else {
            console.error('❌ Todas las funciones principales deberían estar disponibles');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de funciones disponibles:', error);
        failed++;
    }
    
    try {
        // Prueba 14: Configuración disponible
        total++;
        if (config.API_URL && colombiaBounds && mapConfig) {
            console.log('✅ Toda la configuración está disponible');
            passed++;
        } else {
            console.error('❌ Toda la configuración debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de configuración disponible:', error);
        failed++;
    }
    
    try {
        // Prueba 15: Consistencia de coordenadas
        total++;
        if (colombiaBounds && isInColombia(colombiaBounds[0][0], colombiaBounds[0][1])) {
            console.log('✅ Las coordenadas de Colombia son consistentes');
            passed++;
        } else {
            console.error('❌ Las coordenadas de Colombia deberían ser consistentes');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de consistencia de coordenadas:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    if (failed === 0) {
        console.log('🎉 ¡TODAS LAS PRUEBAS PASARON EXITOSAMENTE!');
    } else {
        console.log('⚠️  Algunas pruebas fallaron. Revisa los errores arriba.');
    }
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de utilidades
 */
function runUtilsTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE UTILIDADES...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('📊 Pruebas de Utilidades (helpers.js)');
    
    try {
        // Prueba 1: isInColombia con coordenadas válidas
        total++;
        if (isInColombia(4.7110, -74.0721) === true) {
            console.log('✅ isInColombia(4.7110, -74.0721) retorna true');
            passed++;
        } else {
            console.error('❌ isInColombia(4.7110, -74.0721) debería retornar true');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de isInColombia:', error);
        failed++;
    }
    
    try {
        // Prueba 2: isInColombia con coordenadas fuera de Colombia
        total++;
        if (isInColombia(40.7128, -74.0060) === false) {
            console.log('✅ isInColombia(40.7128, -74.0060) retorna false');
            passed++;
        } else {
            console.error('❌ isInColombia(40.7128, -74.0060) debería retornar false');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de isInColombia:', error);
        failed++;
    }
    
    try {
        // Prueba 3: formatAcqTime
        total++;
        if (formatAcqTime(1430) === '14:30') {
            console.log('✅ formatAcqTime(1430) retorna 14:30');
            passed++;
        } else {
            console.error('❌ formatAcqTime(1430) debería retornar 14:30');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de formatAcqTime:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE UTILIDADES:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de constantes
 */
function runConstantsTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE CONSTANTES...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('⚙️ Pruebas de Constantes (constants.js)');
    
    try {
        // Prueba 1: colombiaBounds
        total++;
        if (colombiaBounds && colombiaBounds.length === 2) {
            console.log('✅ colombiaBounds está definido y tiene 2 elementos');
            passed++;
        } else {
            console.error('❌ colombiaBounds debería estar definido y tener 2 elementos');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de colombiaBounds:', error);
        failed++;
    }
    
    try {
        // Prueba 2: mapConfig
        total++;
        if (mapConfig && mapConfig.center && mapConfig.zoom) {
            console.log('✅ mapConfig está definido con center y zoom');
            passed++;
        } else {
            console.error('❌ mapConfig debería estar definido con center y zoom');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de mapConfig:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE CONSTANTES:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de mapa
 */
function runMapTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE MAPA...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('🗺️ Pruebas de Mapa');
    
    try {
        // Prueba 1: Configuración del mapa
        total++;
        if (mapConfig.center[0] === 4.6 && mapConfig.center[1] === -74.1) {
            console.log('✅ Centro del mapa configurado correctamente');
            passed++;
        } else {
            console.error('❌ Centro del mapa debería ser [4.6, -74.1]');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de configuración del mapa:', error);
        failed++;
    }
    
    try {
        // Prueba 2: Zoom del mapa
        total++;
        if (mapConfig.zoom === 6) {
            console.log('✅ Zoom del mapa configurado correctamente');
            passed++;
        } else {
            console.error('❌ Zoom del mapa debería ser 6');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de zoom del mapa:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE MAPA:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de servicios
 */
function runServiceTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE SERVICIOS...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('🔌 Pruebas de Servicios');
    
    try {
        // Prueba 1: URL de API
        total++;
        if (config.API_URL && config.API_URL.includes('firms')) {
            console.log('✅ URL de API contiene "firms"');
            passed++;
        } else {
            console.error('❌ URL de API debería contener "firms"');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de URL de API:', error);
        failed++;
    }
    
    try {
        // Prueba 2: Función isInColombia disponible
        total++;
        if (typeof isInColombia === 'function') {
            console.log('✅ Función isInColombia está disponible');
            passed++;
        } else {
            console.error('❌ Función isInColombia debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de función isInColombia:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE SERVICIOS:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de marcadores
 */
function runMarkerTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE MARCADORES...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('📍 Pruebas de Marcadores');
    
    try {
        // Prueba 1: Función createPopupContent
        total++;
        if (typeof createPopupContent === 'function') {
            console.log('✅ Función createPopupContent está disponible');
            passed++;
        } else {
            console.error('❌ Función createPopupContent debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de función createPopupContent:', error);
        failed++;
    }
    
    try {
        // Prueba 2: Generación de contenido HTML
        total++;
        const mockProperties = {
            acq_date: '2024-01-15',
            acq_time: '1430',
            brightness: '320.5',
            confidence: '85',
            frp: '12.3',
            latitude: 4.7110,
            longitude: -74.0721
        };
        
        const popupContent = createPopupContent(mockProperties);
        if (typeof popupContent === 'string' && popupContent.includes('FIRMS MODIS (24h)')) {
            console.log('✅ createPopupContent genera contenido HTML válido');
            passed++;
        } else {
            console.error('❌ createPopupContent debería generar contenido HTML válido');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de generación de contenido HTML:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE MARCADORES:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

/**
 * Ejecutar pruebas de integración
 */
function runIntegrationTests() {
    console.clear();
    console.log('🧪 EJECUTANDO PRUEBAS DE INTEGRACIÓN...');
    console.log('==========================================');
    
    let total = 0;
    let passed = 0;
    let failed = 0;
    
    console.group('🔗 Pruebas de Integración');
    
    try {
        // Prueba 1: Funciones disponibles
        total++;
        if (typeof isInColombia === 'function' && 
            typeof formatAcqTime === 'function') {
            console.log('✅ Todas las funciones principales están disponibles');
            passed++;
        } else {
            console.error('❌ Todas las funciones principales deberían estar disponibles');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de funciones disponibles:', error);
        failed++;
    }
    
    try {
        // Prueba 2: Configuración disponible
        total++;
        if (config.API_URL && colombiaBounds && mapConfig) {
            console.log('✅ Toda la configuración está disponible');
            passed++;
        } else {
            console.error('❌ Toda la configuración debería estar disponible');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de configuración disponible:', error);
        failed++;
    }
    
    try {
        // Prueba 3: Consistencia de coordenadas
        total++;
        if (colombiaBounds && isInColombia(colombiaBounds[0][0], colombiaBounds[0][1])) {
            console.log('✅ Las coordenadas de Colombia son consistentes');
            passed++;
        } else {
            console.error('❌ Las coordenadas de Colombia deberían ser consistentes');
            failed++;
        }
    } catch (error) {
        console.error('❌ Error en prueba de consistencia de coordenadas:', error);
        failed++;
    }
    
    console.groupEnd();
    
    // Resumen
    console.log('=====================================');
    console.log(`📊 RESUMEN DE PRUEBAS DE INTEGRACIÓN:`);
    console.log(`✅ Pasadas: ${passed}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log(`📈 Total: ${total}`);
    console.log(`📊 Porcentaje de éxito: ${((passed / total) * 100).toFixed(1)}%`);
    
    return {
        total,
        passed,
        failed,
        successRate: ((passed / total) * 100).toFixed(1)
    };
}

// ============================================================================
// EXPORTACIÓN
// ============================================================================

// Hacer las funciones disponibles globalmente
if (typeof window !== 'undefined') {
    window.runAllTests = runAllTests;
    window.runUtilsTests = runUtilsTests;
    window.runConstantsTests = runConstantsTests;
    window.runMapTests = runMapTests;
    window.runServiceTests = runServiceTests;
    window.runMarkerTests = runMarkerTests;
    window.runIntegrationTests = runIntegrationTests;
}

// Exportar para uso en módulos ES6
export {
    runAllTests,
    runUtilsTests,
    runConstantsTests,
    runMapTests,
    runServiceTests,
    runMarkerTests,
    runIntegrationTests
};
