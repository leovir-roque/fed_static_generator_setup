# fed_static_generator_setup

A Front End Developer setup using: Assemble, LESS (css pre-processor) and browsersync.

### What's in here beside the setup?

## LESS

1. ITCSS inspired folder structure
```bash
  /app/assets/less
  --/settings
  --/tools
    --/animated
  --/base
  --/generic
  --/layout
  --/module
  --/utilities
```
2. A collection of mixins
3. CSS animation by (https://daneden.github.io/animate.css/) splitted into separate files ~_~
4. Readable Media responsive utilities
```bash
    .media--hidden@tablet
    .media--available@tablet
    .media--hidden@mobile
    .media--available@mobile
```
## Assemble

1. A sample of how to dynamically create header/footer navigation

```bash
  For Header navigation in nav.hbs
      {{#each pages}}
          {{#is data.section "main"}}
              <li {{#is ../../page.dest this.dest}} class="is-active"{{/is}}>
                  <a href="{{relative ../../page.dest this.dest}}">{{data.title}}</a>
              </li>
          {{/is}}
      {{/each}}
    
  Loops all files in the pages folder that has this configuration
      ---
      section: main
      ---
    
  For footer.hbs    
      {{#each pages}}
          {{#isnt data.exclude_from_footer true}}
              <li>
                  <a href="{{relative ../../page.dest this.dest}}">{{data.title}}</a>
              </li>
          {{/isnt}}
      {{/each}}
  
  Loops all the files in the pages folder except for files that have this configuration
      ---
      exclude_from_footer: true
      ---
```
2. A sample of how to add cutom css by using this 
```bash
    {{! in default.hbs }}
    {{#if custom_css}}
        {{#each this.custom_css}}
            <link rel="stylesheet" href="{{path}}">
        {{/each}}
    {{/if}}
    
    {{! in index.hbs }}
    custom_css: [
        {path: asset/css/some-custom.css},
        {path: asset/css/another.css}
    ]
```

## Getting Started

Install all dependencies by running
```bash
$ npm install
```

After all the dependencies gets installed you're ready to go and run:

```bash
$ grunt serve
```
