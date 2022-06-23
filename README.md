# report-builder
Report Builder

## Project structure
```
apps (dir)
├── report-builder (app)
└── report-builder-e2e
libs (dir)
├── report-builder (dir)
│   ├── view (dir) -> list all reports
│   │   ├── shared (dir)
│   │   │   └── data-access (dir)
│   │   │       └── store (lib)
│   │   └── shell (dir)
│   │       └── core (lib)
│   ├── *generator (dir) -> builder
│   │   ├── shared (dir)
│   │   │   └── data-access (dir)
│   │   │       └── store (lib)
│   │   └── shell (dir)
│   │       ├── core (lib)
│   │       └── ui (dir)
│   │           ├── steps-merging (lib)
│   ├── *detail (dir) -> detail report
│   │   ├── shared (dir)
│   │   │   └── data-access (dir)
│   │   │       └── store (lib)
│   │   └── shell (dir)
│   │       └── core (lib)
│   ├── shared (dir)
│   │   └── data-access (dir)
│   │       └── store (lib)
│   └── shell (dir)
│       └── core (lib)
└── shared (dir)
    ├── data-access (dir)
    │   └── common (lib)
    │       └── table (dir)
    ├── ui (dir)
    │   └── common (dir)
    │       ├── table (lib)
    │       │   ├── containers (dir)
    │       │   ├── pipes (dir)
    │       │   └── diretives (dir)
    │       └── chart (lib)
    │           └── containers (dir)
    │               ├── pie
    │               ├── line -> 
    │               └── bar
    └── utils (dir)
```
