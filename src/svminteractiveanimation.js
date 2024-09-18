import React, { useState, useEffect } from 'react';
import { Slider, Button, Card, CardContent } from '@mui/material';

const SVMAnimation = () => {
  const [margin, setMargin] = useState(50);
  const [angle, setAngle] = useState(45);
  const [offset, setOffset] = useState(0);
  const [points, setPoints] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [explanation, setExplanation] = useState('general');

  const svgSize = 400;

  const generateRandomPoints = () => {
    const newPoints = [];
    for (let i = 0; i < 20; i++) {
      newPoints.push({
        x: Math.random() * svgSize,
        y: Math.random() * svgSize,
        class: Math.random() > 0.5 ? 1 : -1
      });
    }
    setPoints(newPoints);
    setOffset(0);
  };

  const generateSeparablePoints = () => {
    const newPoints = [];
    const midpoint = svgSize / 2;
    const spread = svgSize * 0.15;
    for (let i = 0; i < 20; i++) {
      if (i < 10) {
        newPoints.push({
          x: Math.random() * spread + midpoint - spread,
          y: Math.random() * spread + midpoint - spread,
          class: -1
        });
      } else {
        newPoints.push({
          x: Math.random() * spread + midpoint + spread / 2,
          y: Math.random() * spread + midpoint + spread / 2,
          class: 1
        });
      }
    }
    setPoints(newPoints);
    setAngle(45);
    setOffset(0);
  };

  useEffect(() => {
    generateRandomPoints();
  }, []);

  const getSVGPath = (additionalOffset = 0) => {
    const radians = angle * Math.PI / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const totalOffset = offset + additionalOffset;
    const offsetX = -sin * totalOffset;
    const offsetY = cos * totalOffset;
    const midpoint = svgSize / 2;
    const x1 = midpoint - cos * svgSize * 0.75 + offsetX;
    const y1 = midpoint - sin * svgSize * 0.75 + offsetY;
    const x2 = midpoint + cos * svgSize * 0.75 + offsetX;
    const y2 = midpoint + sin * svgSize * 0.75 + offsetY;
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const svgRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - svgRect.left;
      const mouseY = e.clientY - svgRect.top;
      const centerX = svgSize / 2;
      const centerY = svgSize / 2;
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const radians = angle * Math.PI / 180;
      const newOffset = -dx * Math.sin(radians) + dy * Math.cos(radians);
      setOffset(newOffset);
    }
  };

  const explanations = {
    general: "La Máquina de Soporte Vectorial (SVM) es un algoritmo de aprendizaje supervisado utilizado para clasificación y regresión. En este caso, estamos visualizando un SVM para clasificación binaria.",
    points: "Los puntos representan datos. Los puntos azules y rojos pertenecen a dos clases diferentes que el SVM intenta separar.",
    hyperplane: "El hiperplano (línea negra) es la frontera de decisión que separa las dos clases. En 2D, es una línea; en espacios de mayor dimensión, sería un plano o un hiperplano.",
    margin: "El margen es la distancia entre el hiperplano y los puntos de datos más cercanos de cada clase. El SVM busca maximizar este margen para mejorar la generalización.",
    angle: "El ángulo del hiperplano determina su orientación. El SVM ajusta este ángulo para encontrar la mejor separación entre las clases.",
    interaction: "Puedes mover el hiperplano directamente haciendo clic y arrastrando en el gráfico. Esto te permite ver cómo diferentes posiciones del hiperplano afectan la clasificación."
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Máquina de Soporte Vectorial Interactiva</h2>
      <div className="flex flex-row space-x-4">
        <div>
          <svg
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            className="bg-white border border-gray-300 mb-4 cursor-move"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseEnter={() => setExplanation('interaction')}
          >
            {points.map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="5"
                fill={point.class === 1 ? 'blue' : 'red'}
                onMouseEnter={() => setExplanation('points')}
              />
            ))}
            <path d={getSVGPath(-margin / 2)} stroke="gray" strokeWidth="2" strokeDasharray="5,5" onMouseEnter={() => setExplanation('margin')} />
            <path d={getSVGPath()} stroke="black" strokeWidth="3" onMouseEnter={() => setExplanation('hyperplane')} />
            <path d={getSVGPath(margin / 2)} stroke="gray" strokeWidth="2" strokeDasharray="5,5" onMouseEnter={() => setExplanation('margin')} />
          </svg>
          <div className="w-full max-w-md mb-4">
            <label className="block mb-2">Margen: {margin}</label>
            <Slider
              value={margin}
              onChange={(e, value) => setMargin(value)}
              min={10}
              max={100}
              step={1}
              onMouseEnter={() => setExplanation('margin')}
            />
          </div>
          <div className="w-full max-w-md mb-4">
            <label className="block mb-2">Ángulo del hiperplano: {angle}°</label>
            <Slider
              value={angle}
              onChange={(e, value) => setAngle(value)}
              min={0}
              max={180}
              step={1}
              onMouseEnter={() => setExplanation('angle')}
            />
          </div>
          <div className="flex space-x-2">
            <Button variant="contained" onClick={generateRandomPoints}>Generar puntos aleatorios</Button>
            <Button variant="contained" onClick={generateSeparablePoints}>Generar puntos separables</Button>
          </div>
        </div>
        <Card className="w-96">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Explicación</h3>
            <p>{explanations[explanation]}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SVMAnimation;