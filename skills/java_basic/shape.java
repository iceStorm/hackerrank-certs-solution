
class Shape {
    public int length , breadth ;
    public Shape( int length , int breadth ) {
        this.length = length ;
        this.breadth = breadth ;
    }
    public void area() {
        System.out.print(length + " " + breadth);
    }
}

class Rectangle extends Shape {
    Rectangle(int l , int b) {
        super(l,b);
    }
    @Override
    public void area() {
        System.out.print("\n" + length*breadth);
    }
}
