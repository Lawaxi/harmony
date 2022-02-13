import app from 'flarum/forum/app';
import {extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import IndexPage from 'flarum/forum/components/IndexPage';
import Button from 'flarum/common/components/Button';
import Tag from 'flarum/tags/models/Tag';
import Model from 'flarum/common/Model';

app.initializers.add('lawaxi-harmony', (app) => {

  //文章列表操作
  override(DiscussionListItem.prototype, 'view', function (view) {
    if (!app.session.user) {
      if ((this.attrs.discussion.user().username() !== (app.forum.attribute("lawaxi-harmony.allown") || "delay"))) {
        return null;
      }
      else if(this.attrs.discussion.replyCount()>0) {return null;}
      else{
        try {
          app.forum.attribute("lawaxi-harmony.ban").split(',').forEach(
            (value => {
              if (this.attrs.discussion.title().indexOf(value) !== -1) {
                throw new Error('c');
              }
            })
          );
        }catch (e){
          return null;
        }

      }
    }
    return view();
  });

  override(DiscussionList.prototype, 'view', function (view) {
    if (!app.session.user) {
      this.attrs.state.constructor.pageSize = 114514;
    }
    return view();
  });
  /*
  override(DiscussionListItem.prototype, 'infoItems', function (infoItems) {
    let a = infoItems();
    if (!app.session.user) {
      a.remove("terminalPost");
    }
    return a;
  });*/

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
              <div class="Hero-subtitle">{m.trust(app.forum.attribute("lawaxi-harmony.blogsubtitle"))}</div>
            </div>
          </div>
        </header>
      );
    }
    return view();
  });

  //注册按钮(仍然可以通过登录按钮注册)
  override(HeaderSecondary.prototype, 'items', function (view) {
    let a = view();
    if (!app.session.user) {
      a.remove("signUp");
    }
    return a;
  });

  //发文章按钮
  if(app.initializers.has('flarum-tags') && app.initializers.has('fof/best-answer')) {
    Tag.prototype.isQnA = Model.attribute('isQnA');
  }

  override(IndexPage.prototype, 'sidebarItems', function (sidebarItems) {
    let a = sidebarItems();
    if(app.initializers.has('flarum-tags') && app.initializers.has('fof/best-answer')){
      if(this.currentTag()?.isQnA?.()){
        return a;}
    }

    if (!app.session.user) {
      a.remove("newDiscussion");
    }
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

  //去除问答用标签
  if (app.initializers.has('flarum-tags') && app.initializers.has('fof/best-answer')) {
    override(IndexPage.prototype, 'navItems', function (navItems) {
      let a = navItems();
      if (!app.session.user) {
        app.store.all('tags').forEach((value, index, array) => {
          if (value?.isQnA?.()) {
            a.remove("tag" + value.id());
          }
        })
      }
      return a;
    });
  }
});
