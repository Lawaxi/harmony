<?php
use Illuminate\Database\Schema\Builder;
return [
    'up' => function (Builder $schema) {
        /**
         * @var \Flarum\Settings\SettingsRepositoryInterface
         */
        $settings = resolve('flarum.settings');

        $settings->set('lawaxi-harmony.allown', "delay");
        $settings->set('lawaxi-harmony.blogtitle', "六边形博客");
        $settings->set('lawaxi-harmony.blogsubtitle', "“月亮在无人看时不存在。” 本站为 delay 个人学习生活兴趣分享博客。");
        $settings->set('lawaxi-harmony.ban', "习,江,彭,台,北京,扬州,续,论坛,社区");
        $settings->set('lawaxi-harmony.bantags', "teahouse");
        $settings->set('lawaxi-harmony.http', "https");
    },
    'down' => function (Builder $schema) {
        /**
         * @var \Flarum\Settings\SettingsRepositoryInterface
         */
        $settings = resolve('flarum.settings');
        $settings->delete('lawaxi-harmony.allown');
        $settings->delete('lawaxi-harmony.blogtitle');
        $settings->delete('lawaxi-harmony.blogsubtitle');
        $settings->delete('lawaxi-harmony.ban');
        $settings->delete('lawaxi-harmony.bantags');
        $settings->delete('lawaxi-harmony.http');
    },
];
