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
            <h3 className="text-xl font-bold mb-4">Teoría de los Árboles de Decisión</h3>
            <div className="border border-gray-200 rounded-lg">
                <AccordionItem title="¿Qué es un Árbol de Decisión?">
                    <p>Un árbol de decisión es un modelo de predicción utilizado en aprendizaje automático y minería de datos. Este modelo toma decisiones en función de una serie de condiciones o características de los datos, organizadas en una estructura jerárquica similar a un árbol, donde cada nodo interno representa una prueba en una característica, cada rama representa el resultado de la prueba, y cada hoja representa una clase o valor final.</p>
                </AccordionItem>

                <AccordionItem title="Fundamentos Matemáticos">
                    <p>Los árboles de decisión utilizan algoritmos que seleccionan las características que mejor dividen los datos en grupos homogéneos. Dos de los métodos más comunes para evaluar la calidad de una división son:</p>
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                        {`1. Índice de Gini: Mide la impureza de una división.
2. Entropía: Basado en la teoría de la información, mide la aleatoriedad de la información.`}
                    </pre>
                    <p className="mt-2">Estos criterios se utilizan para seleccionar la característica que mejor divide los datos en cada paso de la construcción del árbol.</p>
                </AccordionItem>

                <AccordionItem title="Proceso de Construcción">
                    <ol className="list-decimal list-inside">
                        <li>Seleccionar la característica que mejor divide los datos según un criterio (por ejemplo, Gini o Entropía).</li>
                        <li>Dividir los datos en subconjuntos basados en esa característica.</li>
                        <li>Repetir el proceso de selección y división para cada subconjunto hasta que se cumpla un criterio de detención (como profundidad máxima del árbol o número mínimo de muestras por nodo).</li>
                        <li>Asignar una clase o valor final a cada hoja del árbol.</li>
                    </ol>
                </AccordionItem>

                <AccordionItem title="Ventajas y Desventajas">
                    <h4 className="font-semibold">Ventajas:</h4>
                    <ul className="list-disc list-inside mb-2">
                        <li>Fácil de interpretar y visualizar.</li>
                        <li>Pueden manejar tanto datos categóricos como numéricos.</li>
                        <li>No requieren una gran cantidad de preprocesamiento de datos.</li>
                    </ul>
                    <h4 className="font-semibold">Desventajas:</h4>
                    <ul className="list-disc list-inside">
                        <li>Pueden ser propensos al sobreajuste si no se podan adecuadamente.</li>
                        <li>Menor precisión en comparación con otros modelos más complejos.</li>
                        <li>La construcción de árboles de decisión puede ser computacionalmente costosa en grandes conjuntos de datos.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem title="Aplicaciones Prácticas">
                    <p>Los árboles de decisión se utilizan en una variedad de aplicaciones, incluyendo:</p>
                    <ul className="list-disc list-inside">
                        <li>Diagnóstico médico</li>
                        <li>Clasificación de clientes en marketing</li>
                        <li>Predicción de riesgos financieros</li>
                        <li>Evaluación de la calidad de crédito</li>
                        <li>Reconocimiento de patrones en imágenes</li>
                    </ul>
                </AccordionItem>

                <AccordionItem title="Comparación con Otros Modelos">
                    <p>Los árboles de decisión son uno de varios modelos utilizados para clasificación y regresión. Otros modelos comunes incluyen:</p>
                    <ul className="list-disc list-inside">
                        <li>Regresión logística: Mejor para problemas de clasificación binaria, menos interpretativo que un árbol de decisión.</li>
                        <li>K-Nearest Neighbors (K-NN): Un enfoque basado en la proximidad, no requiere una estructura jerárquica.</li>
                        <li>Redes neuronales: Más potentes pero requieren más datos y poder computacional.</li>
                        <li>Máquinas de soporte vectorial (SVM): Útiles para datos con alta dimensionalidad, más complejas de entender.</li>
                    </ul>
                </AccordionItem>
            </div>
        </div>
    );
};

export default Theory;