/**
 * loadTarget.js
 *
 * Copyright (c) 2019 Guo Y.K. <hi@guoyk.net>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/* global define */
define('$input', 'lodash', function ($input, _) {
  return _.toUpper($input + $input)
})
