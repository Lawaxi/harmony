import app from 'flarum/forum/app';
import {extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import PostMeta from 'flarum/forum/components/PostMeta';
import IndexPage from 'flarum/forum/components/IndexPage';
import Button from 'flarum/common/components/Button';
import Model from 'flarum/common/Model';
import Discussion from "flarum/common/models/Discussion";
import Tag from "flarum/tags/models/Tag";
import DiscussionListState from "flarum/forum/states/DiscussionListState";
import humanTime from 'flarum/common/helpers/humanTime';
import fullTime from 'flarum/common/helpers/fullTime';
import ipLocation from './helpers/ipLocation';
import User from 'flarum/common/models/User';

app.initializers.add('lawaxi-harmony', (app) => {

  //兼容性
  if(app.initializers.has('flarum-tags')) {
    Discussion.prototype.tags = Model.hasMany('tags');

    if(app.initializers.has('fof/best-answer'))
      Tag.prototype.isQnA = Model.attribute('isQnA');
  }


  //文章列表操作
  override(DiscussionListItem.prototype, 'view', function (view) {
    if (!app.session.user) {

      //非特定作者的文章
      if ((this.attrs.discussion.user().username() !== (app.forum.attribute("lawaxi-harmony.allown") || "delay"))) {
        return null;
      }
      //有回复的文章
      else if(this.attrs.discussion.replyCount()>0) {return null;}

      try {

        //敏感分类内的文章
        if(app.initializers.has('flarum-tags')){
          this.attrs.discussion.tags().forEach((value) =>{
            if(app.forum.attribute("lawaxi-harmony.bantags").indexOf(value.slug()) !== -1){
              throw new Error('a');
            }
          })
        }

        //标题含敏感词的文章
        app.forum.attribute("lawaxi-harmony.ban").split(',').forEach(
          (value => {
            if (this.attrs.discussion.title().indexOf(value) !== -1) {
              throw new Error('b');
            }
          })
        );

      }catch (e){
        return null;
      }
    }
    return view();
  });

  //【未实现】给陌生人显示更长的主页 防止因屏蔽部分文章而导致每页文章过少
  extend(DiscussionListState.prototype, 'constructor', function (constructor) {
    if (!app.session.user) {
      this.pageSize = 114514;
    }
  });

  override(DiscussionListItem.prototype, 'replyCountItem', function (replyCountItem) {
    if (!app.session.user) {return null;}
  });

  //Hero标题按钮
  override(WelcomeHero.prototype, 'view', function (view) {
    if (view() && !app.session.user) {
      const slideUp = () => {
        this.$().slideUp(this.hide.bind(this));
      };

      return (
        <header class="Hero WelcomeHero">
          <div class="container">
            <Button
              icon="fas fa-times"
              onclick={slideUp}
              className="Hero-close Button Button--icon Button--link"
              aria-label={app.translator.trans('core.forum.welcome_hero.hide')}
            />

            <div class="containerNarrow">
              <h2 class="Hero-title">{app.forum.attribute("lawaxi-harmony.blogtitle")}</h2>
              <div class="Hero-subtitle">{app.forum.attribute("lawaxi-harmony.blogsubtitle")}</div>
            </div>
          </div>
        </header>
      );
    }
    return view();
  });

  //注册按钮(仍然可以通过登录按钮注册)
  //建议通过语言文件一并修改登录按钮文本 可以选用fof/linguist拓展
  override(HeaderSecondary.prototype, 'items', function (view) {
    let a = view();
    if (!app.session.user) {
      a.remove("signUp");
    }else{

    }
    return a;
  });

  //发文章按钮
  override(IndexPage.prototype, 'sidebarItems', function (sidebarItems) {
    if(app.session.user)
      return sidebarItems();

    //由于best-answer的问答用标签主页 有寻找newDiscussion元素并替换显示文本的机制 以兼容
    if(app.initializers.has('flarum-tags') && app.initializers.has('fof/best-answer')){
      if(this.currentTag()?.isQnA?.()){
        return sidebarItems();}
    }


    let a = sidebarItems();
    a.remove("newDiscussion");
    return a;
  });


  //选择器按钮
  override(IndexPage.prototype, 'viewItems', function (viewItems) {
    let a = viewItems();
    if (!app.session.user) {
      a.remove("sort");
    }
    return a;
  });

  //去除问答用标签&敏感标签
  if(app.initializers.has('flarum-tags')) {
    override(IndexPage.prototype, 'navItems', function (navItems) {
      let a = navItems();
      if (!app.session.user) {
        app.store.all('tags').forEach((value, index, array) => {
          if (app.initializers.has('fof/best-answer')) {
            if (value?.isQnA?.()) {
              a.remove("tag" + value.id());
            }
          }

          if (app.forum.attribute("lawaxi-harmony.bantags").indexOf(value.slug()) !== -1) {
            a.remove("tag" + value.id());
          }

        })
      }
      return a;
    });
  }

  override(PostMeta.prototype,"view", function (view) {
    const post = this.attrs.post;
    const time = post.createdAt();
    const permalink = this.getPermalink(post);
    const touch = 'ontouchstart' in document.documentElement;

    // When the dropdown menu is shown, select the contents of the permalink
    // input so that the user can quickly copy the URL.
    const selectPermalink = function (e) {
      setTimeout(() => $(this).parent().find('.PostMeta-permalink').select());

      e.redraw = false;
    };

    let post_number = function (a) {
      switch(a){
        case 1:
          return app.translator.trans('lawaxi-harmony.forum.post_number1', { number: 1 });
        case 2:
          return app.translator.trans('lawaxi-harmony.forum.post_number2', { number: 2 });
        case 3:
          return app.translator.trans('lawaxi-harmony.forum.post_number3', { number: 3 });
        default:
          return app.translator.trans('core.forum.post.number_tooltip', { number: post.number() })
      }
    }

    return (
      <div className="Dropdown PostMeta">
        <a className="Dropdown-toggle" onclick={selectPermalink} data-toggle="dropdown">
          {humanTime(time)}
          {<a>{'   发布于'+ipLocation(post.data.attributes.ipAddress)}</a>}
        </a>

        <div className="Dropdown-menu dropdown-menu">

          <span className="PostMeta-number">
            {
              post_number(post.number())
            }</span>{' '}
          <span className="PostMeta-time">{fullTime(time)}</span> <span className="PostMeta-ip">{post.data.attributes.ipAddress}</span>
          {touch ? (
            <a className="Button PostMeta-permalink" href={permalink}>
              {permalink}
            </a>
          ) : (
            <input className="FormControl PostMeta-permalink" value={permalink} onclick={(e) => e.stopPropagation()} />
          )}
        </div>
      </div>
    );
  })





},1145141919);
