# Musinsa Frontend Test

## Get Started

1. Installation
```
$ npm install
```

2. Starting the Project
```
$ npm start
```

## Project Directory Structure
```
┌── src
│   ├── @types
│   │   ├── dto                 (Collection of Data Transfer Object types)
│   │   ├── model               (Collection of domain-specific types)
│   │   └── utility             (Collection of utility types)
│   ├── apis                    (API logic called within domain-specific pages)
│   ├── assets                  (Collection of common images used globally)
│   ├── components              (Collection of common components used globally)
│   ├── hooks
│   ├── modules                 (Collection of utility functions unrelated to business logic)
│   ├── pages                   (Collection of components within pages)
│   │   ├── [domain page]
│   │   │   └── components      (Collection of components used only within that page)
│   └── styles                  (Collection of common style variables used within each component)
```


## Packages
- react
- typescript
- styled-component
- axios
- prettier
