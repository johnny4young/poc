extern crate walkdir; // 2.3.2
extern crate rayon; // 1.5.0

use rayon::prelude::*;
use walkdir::WalkDir;

fn main() {
    let count = WalkDir::new(".../../../../../")
        .into_iter()
        .filter_map(|e| e.ok())
        .par_bridge()
        .filter(|e|e.path().is_file())
        .count();
    println!("Found {} files", count);
}