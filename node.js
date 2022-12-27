const rawBodyHTML = `<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>sqlglot for web, powered by amis & pipedream </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/amis/2.5.3-beta.0/sdk.min.css" />
    <style>
      html,
      body,
      .app-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="root" class="app-wrapper"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/amis/2.5.3-beta.0/sdk.min.js"></script>
    <script type="text/javascript">
      (function () {
        let amis = amisRequire('amis/embed');
        let amisJSON = {
          type: 'page',
          title: '<h1>sqlglot for web </h1><h4>powered by amis & pipedream</h4><span>https://github.com/tobymao/sqlglot</span><br><span>https://github.com/baidu/amis</span><br><span>https://pipedream.com/</span>',
          body: {
            type: 'form',
            api: '/translate',
            mode: {
              horizontal: {
                leftFixed: true
              }
            },
            body: [
              {
                label: 'From',
                type: 'select',
                name: 'read_format',
                selectFirst: true,
                mode: 'inline',
                options: [
                  'presto',
                  'mysql',                                    
                  'hive',                  
                  'bigquery',
                  'clickhouse',
                  'databricks',
                  'drill',
                  'duckdb',                  
                  'oracle',
                  'postgres',                  
                  'redshift',
                  'snowflake',
                  'spark',
                  'sqlite',
                  'starrocks',
                  'tableau',
                  'trino',
                  'tsql',
                ],
                checkAll: false
              },
              {
                label: 'To',
                type: 'select',
                name: 'write_format',
                selectFirst: true,
                mode: 'inline',
                options: [                  
                  'hive',
                  'presto',                 
                  'mysql',
                  'bigquery',
                  'clickhouse',
                  'databricks',
                  'drill',
                  'duckdb',
                  'oracle',
                  'postgres',
                  'redshift',
                  'snowflake',
                  'spark',
                  'sqlite',
                  'starrocks',
                  'tableau',
                  'trino',
                  'tsql',
                ],
                checkAll: false
              },
              {
                type: 'textarea',
                label: 'Origin SQL',
                name: 'origin_sql',
                value: "SELECT DATE_FORMAT(FROM_UNIXTIME(1671770481), '%Y-%m-%d')",
              },
              {
                type: 'textarea',
                label: 'Translated SQL',
                name: 'translate_sql',
                value: '\${translate_sql}',
              }
            ]
          }
        };
        let amisScoped = amis.embed('#root', amisJSON);
      })();
    </script>
  </body>
</html>`

export default defineComponent({
  async run({ steps, $ }) {
    if (steps.trigger.event.method === 'GET' && steps.trigger.event.path === '/') {
      await $.respond({
        status: 200,
        body: rawBodyHTML,
      });
      return
    }
    if (steps.trigger.event.path === '/translate') {
      return
    }
    await $.respond({
        status: 200,
        body: 'no serve api',
    });
  },
})
