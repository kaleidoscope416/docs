# 1&2
        'enum Message {
            Quit,
            Echo(String),
            Move{x:i32,y:i32},
            ChangeColor(i32,i32,i32)
        }'
# 3
match
枚举中的类型可以附带数据
 <pre>
 <code>fn process(&mut self, message:Message) {
        match message {
                Message::Echo(s)=>self.echo(s),
                Message::Move(p)=>{
                    
                    self.move_position(p);
                },
                Message::ChangeColor((x,y,z))=>{
                    let c = (x as u8,y as u8,z as u8);
                    self.change_color(c)
                }
                Message::Quit=>self.quit()

        }

    }
 </code>
 </pre>
 用变量来匹配枚举中的数据