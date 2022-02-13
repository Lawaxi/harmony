<?php

/*
 * This file is part of ianm/level-ranks.
 *
 * Copyright (c) ReFlar.
 * Copyright (c) IanM.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Lawaxi\Harmony;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Settings())
        ->serializeToForum('lawaxi-harmony.allown', 'lawaxi-harmony.allown')
        ->serializeToForum('lawaxi-harmony.blogtitle', 'lawaxi-harmony.blogtitle')
        ->serializeToForum('lawaxi-harmony.blogsubtitle', 'lawaxi-harmony.blogsubtitle')
        ->serializeToForum('lawaxi-harmony.ban', 'lawaxi-harmony.ban'),
];
