---
title: Standard Guidelines
---

## BEACSS


### Every element needs a unique title of block--element

#### _Don't_

```
<div class="blog-feed">
	<h1 class="title">Hello</h1>
	<p>This is some summary text</p>
</div>
```

#### _Do_

```
<div class="blog-feed">
	<h1 class="blog-feed--title">Hello</h1>
	<p class="blog-feed--summary">This is some summary text</p>
</div>
```

### Variations are created via data attributes, not other classes

#### _Don't_

```
<div class="blog-feed is-condensed">
	<h1 class="blog-feed--title">Hello</h1>
	<p class="blog-feed--summary">This is some summary text</p>
</div>
```

#### _Do_

```
<div class="blog-feed" data-type="condensed">
	<h1 class="blog-feed--title">Hello</h1>
	<p class="blog-feed--summary">This is some summary text</p>
</div>
```

## Single Source of Truth

#### _Don't_

```
<section class="blog-feed">
  <h1>Our Blog</h1>
  <article>
    <h1 class="title">
     A Blog Title
    </h1>
    ...
  </article>
</section>
```

```
.blog-feed h1 {
  color: red;
  font-size: 32px;
}

article .title {
  font-size: 26px;
  line-height: 1.2;
}
```

## Single Responsibility


#### _Don't_

```
<section class="blog-feed">
  <h2 class="headline">My Headline</h2>
</section>

<footer>
  <h2 class="headline">My Headline</h2>
</footer>
```
```
.headline {
  color: red;
  font-size: 28px;
}

.blog-feed .headline {
  text-transform: uppercase;
}
```

