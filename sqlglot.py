import sqlglot

def handler(pd: "pipedream"):  
  print(pd.steps["trigger"]["context"]["id"])
  event = pd.steps["trigger"]["event"]
  if event['path'] != '/translate':
    return

  # read body
  body = pd.steps["trigger"]["event"]['body']
  read_format = body['read_format']
  write_format = body['write_format']
  origin_sql = body['origin_sql']
  
  result = sqlglot.transpile(origin_sql, 
    read=read_format, 
    write=write_format)
  print(result)
  translate_sql = result[0]
  
  # Return data for use in future steps
  body = {
    'status': 0,
    'msg': 'transpile successe',
    'data': {
      'translate_sql': translate_sql,
    }
  }  
  pd.respond({'status': 200, 'body': body})
  return
