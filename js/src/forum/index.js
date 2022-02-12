import app from 'flarum/forum/app';
import {extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import IndexPage from 'flarum/forum/components/IndexPage';
import Button from 'flarum/common/components/Button';

app.initializers.add('lawaxi-harmony', (app) => {

  //文章列表操作
  override(DiscussionListItem.prototype, 'view', function(view) {
    if(!app.session.user) {
      if ((this.attrs.discussion.user().username() !== (app.forum.attribute("lawaxi-harmony.allown") || "delay"))) {
        return null;
      } else if (!(this.attrs.discussion.title().indexOf("习") === -1
        && this.attrs.discussion.title().indexOf("江") === -1
        && this.attrs.discussion.title().indexOf("彭") === -1
        && this.attrs.discussion.title().indexOf("台") === -1
        && this.attrs.discussion.title().indexOf("北京") === -1
        && this.attrs.discussion.title().indexOf("扬州") === -1
        && this.attrs.discussion.title().indexOf("续") === -1
        && this.attrs.discussion.title().indexOf("论坛") === -1
        && this.attrs.discussion.title().indexOf("社区") === -1)) {
        return null;
      }
    }
    return view();
  });

  override(DiscussionListItem.prototype, 'infoItems', function(infoItems) {
    let a = infoItems();
    if (!app.session.user) {
      a.remove("terminalPost");
    }
    return a;
  });

  override(DiscussionListItem.prototype, 'replyCountItem', function(replyCountItem) {
    if (!app.session.user) {
      return "";
    }
    return replyCountItem();
  });

  //Hero标题按钮
  override(WelcomeHero.prototype, 'view', function(view) {
    if(view() !== null && !app.session.user){
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
              <div class="Hero-subtitle">{m.trust(app.forum.attribute("lawaxi-harmony.blogsubtitle"))}</div>
            </div>
          </div>
        </header>
      );
    }
    return view();
  });

  //注册按钮(仍然可以通过登录按钮注册)
  override(HeaderSecondary.prototype, 'items', function(view) {
      let a = view();
      if (!app.session.user) {
        a.remove("signUp");
      }
      return a;
  });

  //发文章按钮
  override(IndexPage.prototype, 'sidebarItems', function(sidebarItems) {
    let a = sidebarItems();
    if (!app.session.user) {
      a.remove("newDiscussion");
    }
    return a;
  });

  //选择器按钮
  override(IndexPage.prototype, 'viewItems', function(viewItems) {
    let a = viewItems();
    if (!app.session.user) {
      a.remove("sort");
    }
    return a;
  });

});
