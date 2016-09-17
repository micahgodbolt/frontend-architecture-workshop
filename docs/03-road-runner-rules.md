---
title: Road Runner Rules
---

## Our Universe

1. A layout never imposes padding or element styles on its children. It is only concerned with their horizontal or vertical alignment and spacing.
2. Themes and other data attributes never force changes in appearance, they are always a context that layouts, components and elements can subscribe to.
3. A component always touches all four sides of its parent container on. No element will have top or left margins and all last children (right or bottom) will have their margins cleared.
4. The component itself never has backgrounds, widths, floats, padding or margins. Component styles only target the elements inside.
5. Every element has a single, unique, component-scoped class. All styles are applied directly to that selector modified only by contexts and themes. 
6. Elements never use top margins. The first element touches the top of its component. 

## Template Hierarchy


|**Artifact Type**|-| Atoms | Components  |  Containers  |  Patterns |
|:---:|-|---|---|---|---|
| **Naming** |-| No classes or styles | BEACSS | BEACSS | No Classes or styles
|**Role**|-|  Raw Markup/Filters | Styled Tags <br> Fonts <br> Colors <br> Vertical Rhythm | Widths<br>Margins<br>Padding<br>Background | Composition, Abstraction, Default Data
