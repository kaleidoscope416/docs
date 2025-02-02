# 1
## a classic C struct
    struct ColorClassicStruct {
        red: i32,
        blue: i32,
        green : i32
    }
## a tuple struct
    struct ColorTupleStruct(i32,i32,i32);
## a unit struct.
    struct UnitLikeStruct
    通常用于实现 trait 或作为标记类型。
# 2
struct 的更新
    `fn create_color()-> ColorClassicStruct {
        ..  
    }  
    let a = create_color;  
    let b = ColorClassicStruct{  
        red:2,  
        ..a  
    }`
# 3
结构体的方法
    `impl ColorClassicStruct {   
        fn func1(&self){    
         ..     
        }   
    }`