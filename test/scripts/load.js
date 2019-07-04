/**
 * load.js
 *
 * Copyright (c) 2019 Guo Y.K. <hi@guoyk.net>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/* global define */
define('$input', '$load', async function ($input, $load) {
  const ret1 = await $load('./loadTarget', new Map([['$input', 'a']]))
  return {
    val1: $input,
    val2: ret1
  }
})
