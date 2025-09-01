# Hashira Assgn
# Polynomial Constant Finder

This Node.js script computes the **constant term `c`** of a polynomial  
given its roots in arbitrary bases from a JSON file.

## Input Format

- `n`: number of roots provided
- `k`: minimum number of roots required (where `k = m + 1`, `m = degree of polynomial`)
- Each root is given as `{ "base": "...", "value": "..." }`

