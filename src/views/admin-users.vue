<template>
<div>
  <el-table
    :data="nowtableData"
    border
    style="width: 100%">
    <el-table-column 
      prop="userHead"
      label="头像"
    >
      <template slot-scope="scope">
        <div class="one">
          <img class="userHead" :src="scope.row.userHead" alt="">
        </div>
        
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
    >
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
     >
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop=""
      label="操作">
             <template slot-scope="scope">
        <el-button v-if="!scope.row.isFreeze" type="success" @click="handToFreeze(scope.$index,scope.row)">
        <!-- {{!scope.row.isFreeze ? '冻结':'解冻' }} -->冻结
        </el-button>

        <el-button v-else type="info" @click="handToFreeze(scope.$index,scope.row)">
        <!-- {{!scope.row.isFreeze ? '冻结':'解冻' }} -->解冻
        </el-button>
        <el-button type="danger" @click="handToDelete(scope.$index,scope.row)">
           删除
        </el-button>
      </template>

    </el-table-column>

  </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :current-page.sync="currentPage"
        :pager-count="pager"
        :total="tableData.length">
      </el-pagination>
</div>  
</template>
<script>
export default {
    name:'admin-users',
    data(){
        return {
            tableData : [],
            currentPage:1,
            pagesize:3,
            pager:4
        }
    },
    mounted(){
        this.axios.get('/api2/admin/userlist').then((res)=>{
            var status = res.data.status
            
            if(status===0){
                this.tableData = res.data.data.userlist
               
            }
            else{
                 console.log(res.data.data.msg)
            }
        })
    },
    computed:{
      nowtableData:function(){
        return this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
      }
    },
    methods:{
        handToFreeze(index,row){
            console.log(index,row)
            this.axios.post('/api2/admin/updataFreeze',{
                email : row.email,
                isFreeze : !row.isFreeze
            }).then((res)=>{
                var status = res.data.status
                if(status === 0){
                        this.$alert('操作成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                                this.tableData[index].isFreeze = !row.isFreeze
                            }
                        })
                        
                }
                else{
                 console.log(res.data.data.msg)
                      this.$alert('操作失败', '信息', {
                        confirmButtonText: '确定',
                
                        })
              
              }
            })
            console.log(index,row)
        },
        handToDelete(index,row){
          this.axios.post('/api2/admin/deleteUser',{
            email : row.email
          }).then((res)=>{
            var status =res.data.status
            if(status === 0){
                        this.$alert('删除成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                                this.tableData.splice(index,1)
                            }
                        })
            }
            else{
                     this.$alert('删除失败', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                             
                            }
                        })
            }
          })
        }
    }
}
</script>

<style scoped>
.userHead{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

}

.one{
  padding-left: 30%
}
</style>