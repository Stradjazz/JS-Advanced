function solve() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(newUnits) {
            this.units = newUnits;
            
        }
        transformMetrics(valInCm) {
            return this.units === 'm' ? valInCm / 100 : this.units === 'mm' ? valInCm * 10 : valInCm;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
            const radius = this.transformMetrics(this.radius);
            return Math.PI * Math.pow(radius, 2);
        }
        toString() {
            return `${super.toString()} - radius: ${this.transformMetrics(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() {
            const width = this.transformMetrics(this.width);
            const height = this.transformMetrics(this.height);
            return width * height;
        }
        toString() {
            return `${super.toString()} - width: ${this.transformMetrics(this.width)}, height: ${this.transformMetrics(this.height)}`;
        }
        
    }
    return {
        Figure,
        Circle,
        Rectangle
    }

}



