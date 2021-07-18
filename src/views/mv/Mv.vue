<template>
<div>
    <div class="mvs-wrap">
    <div class="filter-wrap">
      <div class="seciton-wrap">
        <span class="section-type">地区:</span>
        <ul class="tabs-wrap" >
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '全部' }" 
              @click="area = '全部'"
              >全部</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '内地' }"  
              @click="area='内地'"
              >内地</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '港台' }"
              @click="area = '港台'"
              >港台</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '欧美' }"
              @click="area = '欧美'"
              >欧美</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '日本' }"
              @click="area = '日本'"
              >日本</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: area == '韩国' }"
              @click="area = '韩国'"
              >韩国</span
            >
          </li>
        </ul>
      </div>
      <div class="type-wrap">
        <span class="type-type">类型:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span
              class="title"
              :class="{ active: type == '全部' }"
              @click="type = '全部'"
              >全部</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: type == '官方版' }"
              @click="type = '官方版'"
              >官方版</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: type == '原声' }"
              @click="type = '原声'"
              >原声</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: type == '现场版' }"
              @click="type = '现场版'"
              >现场版</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: type == '网易出品' }"
              @click="type = '网易出品'"
              >网易出品</span
            >
          </li>
        </ul>
      </div>
      <div class="order-wrap">
        <span class="order-type">排序:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span
              class="title"
              :class="{ active: order == '上升最快' }"
              @click="order = '上升最快'"
              >上升最快</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: order == '最热' }"
              @click="order = '最热'"
              >最热</span
            >
          </li>
          <li class="tab">
            <span
              class="title"
              :class="{ active: order == '最新' }"
              @click="order = '最新'"
              >最新</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="mvs">
       <ul class="list-wrap">
        <li
          :key="mv.id"
          class="list-item"
          v-for="mv in mvList"
          @click="toMv(mv.id)"
        >
          <mv-card
            :author="mv.artistName"
            :duration="mv.duration"
            :id="mv.id"
            :img="mv.cover"
            :name="mv.name"
            :playCount="mv.playCount"
          />
        </li>
      </ul>
       <el-pagination
      @current-change="handleCurrentChange"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      :total="total"
      class="pagination"
      >
    </el-pagination>

</div>
    </div>
    </div>
</template>
<script>
import { allMvs } from "../../api/mv";
import  MvCard  from "../../components/mv-card";
export default {
    name:"Mv",
    components:{MvCard},
    data(){
return{
     area: '全部',
      type: '全部',
      order: '上升最快',
      mvList:[],
      total:0,
      // 每页数据
      limit: 12,
      // 页码
      page: 1,

}
    },
    created(){
      this.getData()
    },
    methods: {
     getData() {
      const { area, type, order } = this;
      allMvs({
        area,
        type,
        order,
       offset: (this.page - 1) * this.limit
      }).then(res => {
        window.console.log(res)
        this.mvList = res.data;
       window.console.log(this.mvList);
        if (res.count) {
          this.total = res.count;
        }
      });
    },
    handleCurrentChange(val){
this.page=val
this.getData()
    },
    toMv(id){
this.$router.push(`/mv/${id}`)
    },
    },
    watch:{
      area:[
        function(){
        this.page=1
      },
      'getData'
      ],
      type:[
        function(){
        this.page=1
      },
      'getData'
      ],
      order:[
        function(){
        this.page=1
      },
      'getData'
      ],

    }
    
    
}
</script>
<style lang="scss" scoped>
    .mvs-wrap {
      margin-left: 25px;
  .filter-wrap {
    .seciton-wrap {
      display: flex;
      margin-top: 20px;
      margin-bottom: 30px;
      span.section-type {
 margin-right: 50px;
 font-size: 12px;
color: #7f7f81;
      }

      ul.tabs-wrap {
         display: flex;
        li.tab {
          margin-right: 50px;
          cursor: pointer;
          span.title {
font-size: 12px;
color: #7f7f81;
          }
        }
      }
    }

    .type-wrap {
       display: flex;
        margin-bottom: 30px;
      span.type-type {
margin-right: 50px;
 font-size: 12px;
color: #7f7f81;
      }

      ul.tabs-wrap {
         display: flex;
        li.tab {
                  margin-right: 50px;
          cursor: pointer;
          span.title {
font-size: 12px;
color: #7f7f81;
          }
        }
      }
    }

    .order-wrap {
       display: flex;
        margin-bottom: 25px;
      span.order-type {
margin-right: 50px;
 font-size: 12px;
color: #7f7f81;
      }

      ul.tabs-wrap {
         display: flex;
        li.tab {
                  margin-right: 50px;
          cursor: pointer;
          span.title {
font-size: 12px;
color: #7f7f81;
          }
        }
      }
    }
  }

  .mvs {
    ul.list-wrap {
      display: flex;
       flex-wrap: wrap;
      li.list-item {
        width: 22%;
        height: 250px;
        margin-right: 20px;
        padding-bottom: 12px;
        mv-card {

        }
      }
    }
  }
  .pagination{
    text-align: right;
  }
}
.active{
  color: #d33a31 !important
}

</style>