<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'ip_last' => ['string', 'length' => 45, 'nullable' => true],
]);
