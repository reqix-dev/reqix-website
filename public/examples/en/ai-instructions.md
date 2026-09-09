# Reqix AI configuration prompt

Using the attached reqix-config-v1.schema.json and template.reqix.json, generate users-demo.reqix.json that can be imported directly into Reqix.

Requirements:
- Page site: http://localhost:3000.
- Request: GET http://localhost:3000/api/users, exact match with no query string.
- Create one group named "User list scenarios" with three alternative rules: 200 with two fictional users (Avery and Riley), 200 with an empty list, and 500 server error.
- Each user has a numeric id and string name; total is numeric. Success and empty bodies use the business shape {"items":[],"total":0}; the error uses {"code":"DEMO_SERVER_ERROR","message":"Please try again"}.

Generation constraints:
1. The root contains only format, version, exportedAt, groups, rules and pageScripts; format="reqix-config" and version=1. Keep all three arrays even when empty. Do not add $schema to the configuration.
2. Preserve all required template fields and pipeline. Set every group, rule and page script enabled=false; rules use enabledIndex=0, hitCount=0 and source="manual".
3. Store rules in groups[].rules with groupId equal to the containing group id; top-level rules=[]. Use unique IDs and numeric millisecond timestamps and sort values.
4. Use pageScope="specified" and pageUrlRules with an exact match for the page origin http://localhost:3000. The request URL and page scope are separate fields.
5. Static mock: responseBodyMode="static", pipeline.response.mode="mock", route.mode="origin"; all other pipeline flags are false.
6. responseBody is a serialized JSON string, not an object. Escape quotes inside it. Do not generate real credentials or user data.
7. Do not add fields outside the template and Schema, comments, trailing commas, placeholder ellipses or unfinished scripts.
8. If you can execute validation, validate against the attached Schema and check unique IDs, group references and consistent enabled flags. If you cannot, say so; never claim validation ran.

Deliver the complete JSON file. If file downloads are unavailable, return a complete JSON code block that I can save as UTF-8 users-demo.reqix.json. Do not return just an array of rules. State the validation status separately, outside the JSON file.

Companion Schema: https://reqix-dev.github.io/reqix-website/schemas/reqix-config-v1.schema.json
