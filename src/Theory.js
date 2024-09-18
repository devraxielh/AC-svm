import React, { useState } from 'react';

const Theory = () => {
    const AccordionItem = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border-b border-gray-200">
                <button
                className="flex justify-between items-center w-full py-4 px-6 text-left font-semibold"
                onClick={() => setIsOpen(!isOpen)}
                >
                {title}
                <span>{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                <div className="py-4 px-6">
                    {children}
                </div>
                )}
            </div>
        );
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Teoría de las Máquinas de Vectores de Soporte (SVM)</h3>
            <div className="border border-gray-200 rounded-lg">
                <AccordionItem title="¿Qué es una Máquina de Vectores de Soporte (SVM)?">
                    <p>Una Máquina de Vectores de Soporte (SVM) es un modelo utilizado en aprendizaje automático que tiene como objetivo encontrar un hiperplano que separe los datos en diferentes clases con el mayor margen posible. Los puntos más cercanos a este hiperplano, llamados vectores de soporte, son los que determinan la mejor separación entre las clases.</p>
                </AccordionItem>
    
                <AccordionItem title="Fundamentos Matemáticos">
                    <p>Las SVM utilizan principios de optimización matemática para encontrar el hiperplano óptimo que separa los datos. En los casos no lineales, las SVM pueden usar funciones de kernel para proyectar los datos en un espacio de mayor dimensión, donde se pueda encontrar un hiperplano lineal.</p>
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                        {`1. Hiperplano: Es el límite que separa las clases en un espacio multidimensional.
    2. Vectores de Soporte: Son los puntos de datos más cercanos al hiperplano y son clave para su construcción.
    3. Función de Kernel: Transforma los datos no lineales en un espacio donde pueden ser linealmente separables.`}
                    </pre>
                    <p className="mt-2">Estos conceptos permiten a las SVM realizar clasificaciones incluso en datos complejos o no lineales.</p>
                </AccordionItem>
    
                <AccordionItem title="Proceso de Construcción">
                    <ol className="list-decimal list-inside">
                        <li>Identificar el hiperplano que mejor separa las clases con el mayor margen posible.</li>
                        <li>Utilizar vectores de soporte para definir el hiperplano y maximizar el margen entre las clases.</li>
                        <li>Si los datos no son linealmente separables, aplicar un kernel para proyectar los datos en un espacio de mayor dimensión.</li>
                        <li>Repetir el proceso hasta encontrar la separación óptima.</li>
                    </ol>
                </AccordionItem>
    
                <AccordionItem title="Ventajas y Desventajas">
                    <h4 className="font-semibold">Ventajas:</h4>
                    <ul className="list-disc list-inside mb-2">
                        <li>Útil para problemas con alta dimensionalidad.</li>
                        <li>Eficaz en problemas de clasificación lineales y no lineales.</li>
                        <li>Capacidad para manejar conjuntos de datos complejos con el uso de kernels.</li>
                    </ul>
                    <h4 className="font-semibold">Desventajas:</h4>
                    <ul className="list-disc list-inside">
                        <li>Pueden ser difíciles de interpretar en comparación con modelos como los árboles de decisión.</li>
                        <li>Requieren más tiempo de entrenamiento en grandes conjuntos de datos.</li>
                        <li>El uso de kernels puede hacer que el modelo sea más complejo de ajustar y entender.</li>
                    </ul>
                </AccordionItem>
    
                <AccordionItem title="Aplicaciones Prácticas">
                    <p>Las SVM se utilizan en una variedad de aplicaciones, incluyendo:</p>
                    <ul className="list-disc list-inside">
                        <li>Clasificación de imágenes</li>
                        <li>Análisis de texto y reconocimiento de patrones</li>
                        <li>Diagnóstico médico</li>
                        <li>Predicción financiera</li>
                        <li>Reconocimiento de voz y rostros</li>
                    </ul>
                </AccordionItem>
    
                <AccordionItem title="Comparación con Otros Modelos">
                    <p>Las SVM son uno de varios modelos utilizados para clasificación y regresión. Otros modelos comunes incluyen:</p>
                    <ul className="list-disc list-inside">
                        <li>Regresión logística: Adecuado para clasificación binaria, más sencillo de interpretar.</li>
                        <li>K-Nearest Neighbors (K-NN): Modelo basado en la proximidad de los datos.</li>
                        <li>Redes neuronales: Más potentes, pero requieren más datos y poder computacional.</li>
                        <li>Árboles de decisión: Fáciles de interpretar, pero menos efectivos en problemas de alta dimensionalidad.</li>
                    </ul>
                </AccordionItem>
            </div>
        </div>
    );
};

export default Theory;