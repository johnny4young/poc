struct Greeting {
    greet: String
}

fn main() {
    let my_greet = Greeting { greet: "Hi".to_string() };
    println!("{}", my_greet.greet);
}