
class Shape {
    int length;
    int breadth;
    
    public Shape(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    
    public void area() {
        System.out.println(String.format("%s %s", this.length, this.breadth));
    }
}

class Rectangle extends Shape {
    public Rectangle(int length, int breadth) {
        super(length, breadth);
    }
    
    @Override public void area() {
        System.out.println(this.length * this.breadth);
    }
}
